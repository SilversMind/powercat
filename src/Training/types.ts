export type Training = {
    id: string
    trainingPosition: number
    exercises: Exercise[]
}

export type Exercise = {
    name: string
    sets: Set[]
}

export type Set = {
    id: string
    reps: number
    rpe: number
    weight: number
    isValidated: boolean
}
export type PR = {
    [exercise: string]: number;
    squat: number,
    bench: number,
    deadlift: number
}

export type User = {
    name: string;
    PR: PR,
    currentTraining: number,
    currentProgram: number,
    isTrainingInProgress: boolean

}