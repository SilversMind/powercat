import {Training} from "../Training/types";

export type ProgramMetadata = {
    id: string
    nbTrainings: number
}
export type SubBlock = {
    name: string
    startTrainingId: number
    endTrainingId: number
}
export type Block = {
    id: string
    name: string
    subBlocks: SubBlock[]
}
export type Program = {
    id: string
    name: string
    category: string
    nbTrainings: number
    trainings: Training[]
    blocks: Block[]
}

export type Programs = {
    programs: Program[]
}