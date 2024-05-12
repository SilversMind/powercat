import {PR} from "../Training/types"

export type Profile = {
    name: string
    PR: PR
    currentProgram: number | null
    currentTraining: number
    isActive: boolean
}