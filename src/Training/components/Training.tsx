import { Exercise } from "./Exercise";
export interface TrainingProps {
  trainingId: number;
  exercises: {
    exerciseName: string;
    set: number;
    reps: number;
    rpe: number;
    weight: number;
  }[];
}

const onClick = () => {
  fetch("http://192.168.1.16:8000/training/finish").then(() => {
    window.location.reload();
  });
};

export const Training = ({ trainingId, exercises }: TrainingProps) => {
  const containerStyle = {
    backgroundColor: "rgba(87,86,86,0.17)",
    border: "1px solid #ccc",
    padding: "10px",
  };
  return (
    <div>
      <h2>Entrainement n°{trainingId}</h2>
      <div style={containerStyle}>
        {exercises?.map((exercise) => (
          <Exercise
            exerciseName={exercise.exerciseName}
            set={exercise.set}
            rpe={exercise.rpe}
            reps={exercise.reps}
            weight={exercise.weight}
          />
        ))}
      </div>
      <button onClick={() => onClick()}>Fini !</button>
    </div>
  );
};
