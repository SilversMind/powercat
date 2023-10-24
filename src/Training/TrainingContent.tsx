import {Button, Flex, Spinner} from "@chakra-ui/react"
import {ProgramProgressInfo} from "./components/ProgramProgressInfo"
import Colors from "../settings/colors"
import {TrainingDetails} from "./components/TrainingDetails"
import React from "react"
import {updateCurrentTraining} from "../queries/profileQueries"
import {useTraining} from "./services/queryTraining";
import {useUser} from "../useUser";

export const TrainingContent = () => {
    const {currentUser} = useUser()
    const {training, isLoading} = useTraining(currentUser)

    if (!training || isLoading) return (
        <Flex margin="auto">
            <Spinner/>
        </Flex>
    )

    return (
        <>
            <ProgramProgressInfo programId={training.id} nbTrainings={training.nbTrainings} trainingId={training.id}/>
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
                onClick={() => updateCurrentTraining("Lolo")}
            >
                Valider la séance
            </Button>
        </>
    )
}
