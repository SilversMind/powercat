import {Training} from "../Training/types";

export type ProgramMetadata = {
    id: string
    nbTrainings: number
}
export type ProgramData = {
    id: string
    name: string
    category: string
    nbTrainings: number
    trainings: Training[]
}

enum Category {
    PEAKING = '1',
    TECHNIQUE = '2',
}

export type Programs = {
    programs: ProgramData[]
}