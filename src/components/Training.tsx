import {Exercise} from "./Exercise";
export interface TrainingProps {
    id: number;
    exercises: {
            type: string;
            set: number;
            reps: number;
            rpe: number;
        }[];
}

const onClick = () => {
    fetch("http://localhost:8000/finish_training").then(() => {
        window.location.reload();
    });
}

export const Training = ({id, exercises}: TrainingProps ) => {
    const containerStyle = {
        backgroundColor: 'rgba(87,86,86,0.17)',
        border: '1px solid #ccc',
        padding: '10px'
    };
    return (
        <>
            <h2>Entrainement n°{id}</h2>
            <div style={containerStyle}>
                {exercises?.map((exercise) => (
                    <Exercise
                        exerciseName={exercise.type}
                        set={exercise.set}
                        rpe={exercise.rpe}
                        reps={exercise.reps}
                    />
                ))
                }
            </div>
            <button onClick={() => onClick()} >Fini !</button>
        </>
    );
}