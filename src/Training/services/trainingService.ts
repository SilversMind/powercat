import {Exercise, Set, Training} from "../types";
import {useUser} from "../../useUser";
import {ExerciseDictionary} from "../components/TrainingDetailsRow";
import {settings} from "../../setting";

const mapResponseToTestSet = (responseSet: any): Set => {
    return {
        id: responseSet.id,
        reps: responseSet.reps,
        rpe: responseSet.rpe,
        weight: responseSet.weight,
        isValidated: responseSet.is_validated
    };
};

export const fetchTraining = async (username: string | undefined): Promise<Training | undefined> => {
    if (!username) return
    const response = await fetch(`${settings.defaultIPAddress}/training?username=${username}`)
    const result = await response.json()
    const exercises: Exercise[] = result.exercises.map((exercise: Exercise) => {
        const sets: Set[] = exercise.sets.map((set: Set) => mapResponseToTestSet(set));
        return {
            name: exercise.name,
            sets: sets
        };
    });

    return {
        id: result.id,
        trainingPosition: result.training_position,
        exercises: exercises
    };
}

export const fetchCurrentTrainingResults = async (username: string | undefined): Promise<ExerciseDictionary | undefined> => {
    if (!username) return
    const response = await fetch(`${settings.defaultIPAddress}/training/get_current_training_results?username=${username}`)
    return response.json()
}

export const validateSet = async (set: Set, isValidated: boolean, exerciseName: string, trainingId: string) => {
    const currentUser = useUser.getState().currentUser
    if (!currentUser) return Promise.reject()
    const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            name: currentUser,
            validated: set,
            isValidated: isValidated,
            exerciseName: exerciseName,
            trainingId: trainingId
        }),
    }
    const response = await fetch(`${settings.defaultIPAddress}/training/validate_set`, requestOptions)
    return response.json()
}

export const updateCurrentTraining = async (currentUser: string | undefined): Promise<void> => {
    if (!currentUser) return Promise.reject()

    const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name: currentUser}),
    }
    const response = await fetch(`${settings.defaultIPAddress}/training/finish`, requestOptions)
    return response.json()
}