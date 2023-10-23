import {Profile} from "../TrainingScreen/TrainingScreen";

export const fetchProfileData = async (profileName: string): Promise<Profile> => {
    const response = await fetch("http://192.168.1.16:8000/profile/" + profileName);
    const profileData = await response.json()
    return {
        name: profileData.name,
        PR: profileData.PR,
        currentProgram: profileData.current_program,
        currentTraining: profileData.current_training,
        isTrainingInProgress: profileData.is_training_inprogress,
    }
};

export const updateCurrentTraining = async (profileName: string) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: profileName }),
    };
    const response = await fetch("http://192.168.1.16:8000/training/finish", requestOptions);
    await response.json()



}