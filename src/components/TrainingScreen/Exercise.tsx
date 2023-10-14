interface ExerciseProps {
    exerciseName: string,
    set: number,
    rpe: number,
    reps: number
    weight: number
}

const ExerciseStyle = {
    display: 'flex',
    justifyContent: 'space-between'
}
export const Exercise = ({exerciseName, set, rpe, reps, weight}: ExerciseProps) =>{
    console.log(exerciseName)
    return (
        <>
            <h2>{exerciseName[0].toLocaleUpperCase() + exerciseName.slice(1)}</h2>
            <div style={ExerciseStyle}>
                <p>{set} séries de {reps} répétitions à rpe {rpe}</p>
                <p>Poids: {weight} kg</p>
            </div>
        </>
    )
}