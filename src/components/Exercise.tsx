interface ExerciseProps {
    exerciseName: string,
    set: number,
    rpe: number,
    reps: number
}
export const Exercise = ({exerciseName, set, rpe, reps}: ExerciseProps) =>{
    console.log(exerciseName)
    return (
        <>
            <h2>{exerciseName[0].toLocaleUpperCase() + exerciseName.slice(1)}</h2>
            <p>{set} séries de {reps} répétitions à rpe {rpe}</p>
        </>
    )
}