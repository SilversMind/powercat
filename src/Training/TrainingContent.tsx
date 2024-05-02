import {Button, Flex, Spinner, useToast} from "@chakra-ui/react"
import {ProgramProgressInfo} from "./components/ProgramProgressInfo"
import {TrainingDetails} from "./components/TrainingDetails"
import React from "react"
import {useTraining, useUpdateTraining} from "./services/queryTraining";
import {useUser} from "../useUser";
import {useProgram} from "../Program/services/queryProgram";
import {useNavigate} from "react-router-dom";


export const TrainingContent = () => {
    const toast = useToast()
    const navigate = useNavigate()
    const {currentUser} = useUser()
    const {training, isTrainingLoading} = useTraining()
    const {updateTraining} = useUpdateTraining()
    const {program, isProgramLoading} = useProgram()

    const handleClick = () => {
        updateTraining(currentUser, {
            onSuccess: () => {
                toast({
                    title: 'Séance terminé',
                    description: "Bien joué l'équipe ! Stronger than yesterday, Weaker than tomorrow",
                    status: 'success',
                    isClosable: true,
                    position: "top"
                })
            }
        })
    }

    if (isProgramLoading || isTrainingLoading) return (
        <Flex margin="auto">
            <Spinner/>
        </Flex>
    )


    if (!program || !training) return (
        <Flex margin="auto" direction="column">
            Pas de programme en cours !
            <Button
                border="2px"
                size="lg"
                onClick={() => navigate('/programs')}
            >
                Voir les programmes
            </Button>
        </Flex>)


    return (
        <>
            <ProgramProgressInfo trainingId={training.trainingPosition} programId={program.id}
                                 nbTraining={program.nbTrainings}/>
            <Flex
                fontWeight="bold"
                mt={4}
                justify="center"
                w="25vw"
                rounded="md"
            >
                Séance {training.trainingPosition}
            </Flex>
            <TrainingDetails {...training} />
            <Button
                mt={10}
                border="2px"
                size="lg"
                onClick={handleClick}
            >
                Valider la séance
            </Button>
        </>
    )
}
