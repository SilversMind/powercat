import {Button, Flex, Spinner} from "@chakra-ui/react"
import {ProgramProgressInfo} from "./components/ProgramProgressInfo"
import Colors from "../colors"
import {TrainingDetails} from "./components/TrainingDetails"
import React from "react"
import {useTraining} from "./services/queryTraining";
import {updateCurrentTraining} from "./services/trainingService";

export const TrainingContent = () => {
    const {training, isLoading} = useTraining()

    if (!training) return null

    if (isLoading) return (
        <Flex margin="auto">
            <Spinner/>
        </Flex>
    )

    return (
        <>
            <ProgramProgressInfo programId={training.programId} nbTrainings={training.nbTrainings}
                                 trainingId={training.id}/>
            <Flex
                fontWeight="bold"
                mt={4}
                justify="center"
                w="25vw"
                bg={Colors.Primary}
                rounded="md"
                color="white"
            >
                Séance {training.id}
            </Flex>
            <TrainingDetails {...training} />
            <Button
                mt={10}
                bg={Colors.Secondary}
                border="2px"
                borderColor="white"
                color="white"
                size="lg"
                onClick={updateCurrentTraining}
            >
                Valider la séance
            </Button>
        </>
    )
}
