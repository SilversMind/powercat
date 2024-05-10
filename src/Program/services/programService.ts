import {Program, ProgramMetadata} from "../types";
import {settings} from "../../setting";

export const fetchProgramMetadata = async (username: string | undefined): Promise<ProgramMetadata | null | undefined> => {
    if (!username) return
    const response = await fetch(`${settings.defaultIPAddress}/program?username=${username}`)

    if (response.status === 204) return null

    const result = await response.json()
    return {
        id: result.id,
        nbTrainings: result.nb_trainings
    }
}

export const fetchPrograms = async (username: string | undefined): Promise<Program[] | undefined> => {
    const response = await fetch(`${settings.defaultIPAddress}/program/list-programs?username=${username}`)
    const result = await response.json()
    return result.map((item: any) => {
        return {
            id: String(item.id),
            name: item.name,
            category: item.category,
            nbTrainings: item.nb_trainings,
            blocks: item.blocks ? item.blocks.map((block: any) => ({
                id: block.id,
                name: block.name,
                subBlocks: block.subblocks.map((subblock: any) => ({
                    name: subblock.name,
                    startTrainingId: subblock.start_training_id,
                    endTrainingId: subblock.end_training_id
                }))
            })) : undefined,
            trainings: item.trainings.map((training: any) => ({
                exercises: training.exercises,
                id: training.id,
                trainingPosition: training.training_position
            }))
        };
    });
}

export const updateCurrentProgram = async (programId: string, currentUser: string | undefined): Promise<void> => {
    if (!currentUser) return Promise.reject()

    const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username: currentUser, program_id: programId.toString()}),
    }
    const response = await fetch(`${settings.defaultIPAddress}/program/select`, requestOptions)
    return response.json()
}