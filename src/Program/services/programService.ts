import {ProgramData, ProgramMetadata} from "../types";
import {settings} from "../../setting";

export const fetchProgramMetadata = async (username: string | undefined): Promise<ProgramMetadata | undefined> => {
    if (!username) return
    const response = await fetch(`${settings.defaultIPAddress}/program?username=${username}`)
    const result = await response.json()
    return {
        id: result.id,
        nbTrainings: result.nb_trainings
    }
}

export const fetchPrograms = async (): Promise<ProgramData[] | undefined> => {
    const response = await fetch(`${settings.defaultIPAddress}/program/list-programs`)
    const result = await response.json()
    const mappedData = result.map((item: any) => {
        return {
            id: item.id,
            name: item.name,
            category: item.category,
            nbTrainings: item.nb_trainings,
            trainings: item.trainings,
        };
    });

    return mappedData;
}