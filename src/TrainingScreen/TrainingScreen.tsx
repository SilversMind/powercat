import {Button, Flex, Avatar, Text} from "@chakra-ui/react";
import {ProgramProgressInfo} from "./components/ProgramProgressInfo";
import Colors from "../settings/colors";
import {TrainingDetails} from "./components/TrainingDetails";
import React, {useEffect, useState} from "react";
import {fetchTrainingData} from "../queries/trainingQueries";
import {fetchProgramData} from "../queries/programQueries";

import {fetchProfileData, updateCurrentTraining} from "../queries/profileQueries";

export interface TrainingProps {
    trainingId: number;
    programId: number,
    exercises: {
        exerciseName: string;
        set: number;
        reps: number;
        rpe: number;
        weight: number;
    }[];
}

export interface ProgramProps {
    programId: number;
    nbTrainings: number;
}

type PR = {
    squat: number,
    bench: number,
    deadlift: number
}
export type Profile = {
    name: string;
    PR: PR,
    currentTraining: number,
    currentProgram: number,
    isTrainingInProgress: boolean

}


export const TrainingScreen = () => {
    const [TrainingData, setTrainingData] = useState<TrainingProps>();
    const [ProgramData, setProgramData] = useState<ProgramProps>();
    const [ProfileData, setProfileData] = useState<Profile>();

    useEffect(() => {
        fetchProfileData("Lolo")
            .then(profileData => {
                setProfileData(profileData)
                return profileData
            })
            .then(profile => fetchTrainingData(profile.currentTraining).then(data => setTrainingData({
            trainingId: data.id,
            ...data
        })).catch(error => {
            console.error('Error:', error);
        }))

        fetchProgramData(Math.floor(1)).then(data => setProgramData({
            programId: data.id,
            nbTrainings: data.nb_trainings
        })).catch(error => {
            console.error('Error:', error);
        })
    }, [])


    if (!TrainingData || !ProgramData || !ProfileData) return <p>Loading</p>;
    return (
        <Flex
            direction={"column"}
            bgGradient={Colors.Background}
            w="100vw"
            h="100vh"
            align={"center"}
        >
            <Flex justify="flex-end" w="100%">
                <Flex p="6" color="white">
                    <Text fontWeight={"semibold"} mt={2} mr={2}>
                        Lolo
                    </Text>
                    <Avatar size="md" name="John Doe" src="/assets/ptitepoupoup.jpeg"/>
                </Flex>
            </Flex>
            <ProgramProgressInfo program={ProgramData} trainingId={TrainingData.trainingId}/>
            <Flex
                fontWeight="bold"
                mt={4}
                justify={"center"}
                w={"25vw"}
                bg={Colors.Primary}
                rounded={"md"}
                color={"white"}
            >
                Seance {TrainingData.trainingId}
            </Flex>
            <TrainingDetails {...TrainingData} />
            <Button
                mt={10}
                bg={Colors.Secondary}
                border="2px"
                borderColor="white"
                color={"white"}
                size={"lg"}
                onClick={() => updateCurrentTraining(ProfileData.name)}
            >
                Valider la séance
            </Button>
        </Flex>
    );
};
