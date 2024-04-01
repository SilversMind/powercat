import {Button, Flex, Spinner, useToast} from "@chakra-ui/react"
import {ProgramProgressInfo} from "./components/ProgramProgressInfo"
import Colors from "../colors"
import {TrainingDetails} from "./components/TrainingDetails"
import React from "react"
import {useTraining, useUpdateTraining} from "./services/queryTraining";
import {useUser} from "../useUser";
import {useProgram} from "../Program/services/queryProgram";


export const TrainingContent = () => {
    const toast = useToast()
    const {currentUser} = useUser()
    const {training, isTrainingLoading} = useTraining()
    const {updateTraining} = useUpdateTraining()
    const {program, isProgramLoading} = useProgram()

    if (!program || !training) return null

    if (isProgramLoading || isTrainingLoading) return (
        <Flex margin="auto">
            <Spinner/>
        </Flex>
    )

    const handleClick = () => {
        updateTraining(currentUser, {
            onSuccess: () => {
                toast({
                    title: 'Séance terminé',
                    description: "Bien joué l'équipe ! Stronger than yesterday, Weaker than tomorrow",
                    status: 'success',
                    isClosable: true,
                })
            }
        })
    }


    return (
        <>
            <ProgramProgressInfo trainingId={training.trainingPosition} programId={program.id}
                                 nbTraining={program.nbTrainings}/>
            <Flex
                fontWeight="bold"
                mt={4}
                justify="center"
                w="25vw"
                bg={Colors.Primary}
                rounded="md"
                color="white"
            >
                Séance {training.trainingPosition}
            </Flex>
            <TrainingDetails {...training} />
            <Button
                mt={10}
                bg={Colors.Secondary}
                border="2px"
                borderColor="white"
                color="white"
                size="lg"
                onClick={handleClick}
            >
                Valider la séance
            </Button>
        </>
    )
}
