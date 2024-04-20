import {ProgramMetadata} from "../types";
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