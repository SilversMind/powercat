export type Training = {
    trainingId: number
    programId: number
    exercises: Exercise[]
}

type Exercise = {
    exerciseName: string
    set: number
    reps: number
    rpe: number
    weight: number
}

export type Program = {
    programId: number
    nbTrainings: number
}

export type PR = {
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