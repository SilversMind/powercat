import {Exercise} from "./Exercise";
export interface TrainingProps {
    date: string;
    exercises: {
            type: string;
            sets: number;
            reps: number;
            rpe: number;
        }[];
}

export const Training = ({date, exercises}: TrainingProps ) => {
    const containerStyle = {
        backgroundColor: 'rgba(87,86,86,0.17)',
        border: '1px solid #ccc',
        padding: '10px'
    };
    return (
        <>
            <h2>Entrainement du {date}</h2>
            <div style={containerStyle}>
                {exercises?.map((exercise) => (
                    <Exercise
                        exerciseName={exercise.type}
                        set={exercise.sets}
                        rpe={exercise.rpe}
                        reps={exercise.reps}
                    />
                ))
                }
            </div>
        </>
    );
}