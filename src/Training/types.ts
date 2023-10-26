export type Training = {
    id: number
    programId: number
    exercises: Exercise[]
    nbTrainings: number
}

type Exercise = {
    exerciseName: string
    set: number
    reps: number
    rpe: number
    weight: number
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