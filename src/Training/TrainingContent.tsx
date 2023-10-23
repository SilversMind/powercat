import {Button, Flex, Spinner} from "@chakra-ui/react"
import {ProgramProgressInfo} from "./components/ProgramProgressInfo"
import Colors from "../settings/colors"
import {TrainingDetails} from "./components/TrainingDetails"
import React, {useEffect, useState} from "react"
import {fetchProgramData} from "../queries/programQueries"
import {fetchProfileData, updateCurrentTraining} from "../queries/profileQueries"
import {Program, User} from "./types"
import {useTraining} from "./services/queryTraining";

export const TrainingContent = () => {
    const [user, setUser] = useState<User>()
    const [program, setProgram] = useState<Program>()
    const {training, isLoading} = useTraining(user?.currentTraining)

    useEffect(() => {
        fetchProfileData("Lolo")
            .then(profileData => {
                setUser(profileData)
                return profileData
            })

        fetchProgramData(Math.floor(1)).then(data => setProgram({
            programId: data.id,
            nbTrainings: data.nb_trainings
        })).catch(error => {
            console.error('Error:', error);
        })
    }, [])

    if (!training || !program || !user || isLoading) return (
        <Flex margin="auto">
            <Spinner/>
        </Flex>
    )
    
    return (
        <>
            <ProgramProgressInfo program={program} trainingId={training.trainingId}/>
            <Flex
                fontWeight="bold"
                mt={4}
                justify="center"
                w="25vw"
                bg={Colors.Primary}
                rounded="md"
                color="white"
            >
                Séance {training.trainingId}
            </Flex>
            <TrainingDetails {...training} />
            <Button
                mt={10}
                bg={Colors.Secondary}
                border="2px"
                borderColor="white"
                color="white"
                size="lg"
                onClick={() => updateCurrentTraining(user.name)}
            >
                Valider la séance
            </Button>
        </>
    )
}
