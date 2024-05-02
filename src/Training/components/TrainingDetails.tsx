import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Spacer,
    Spinner,
    Table,
    TableContainer,
    Tbody,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import {ExerciseCard} from "./ExerciseCard";
import {TrainingDetailsRow} from "./TrainingDetailsRow";
import {useUser} from "../../useUser";
import {useCurrentTrainingResult} from "../services/queryTraining";
import {Exercise, Set, Training} from "../types";

export type ExerciseDetailProps = {
    exerciseName: string
    set: number
    rpe: number
    reps: number
    weight: number
}

export function formatName(exerciseName: string) {
    return exerciseName[0].toLocaleUpperCase() + exerciseName.slice(1)
}

const ExerciseDetail = ({exercise, trainingId}: { exercise: Exercise, trainingId: string }) => {
    const {currentUser} = useUser()
    const {isLoading, trainingResults} = useCurrentTrainingResult()
    if (isLoading) return (<Spinner>Spin</Spinner>)
    return (
        <TableContainer
            ml={"2vw"}
            w={"96vw"}
            rounded={25}
        >
            <Table
                variant="stripped"
                layout={"fixed"}
                className={"no-padding"}
            >
                <Thead>
                    <Tr>
                        <Th fontSize={"8px"} maxWidth={"10px"} w={"5px"}>
                            Reps
                        </Th>
                        <Th fontSize={"10px"} maxWidth={"10px"}>
                            Poids
                        </Th>
                        <Th fontSize={"10px"} w={"70px"}>
                            RPE
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {exercise.sets.map((set: Set, index: number) =>
                        <TrainingDetailsRow set={set} idx={index} exerciseName={exercise.name} trainingId={trainingId}
                            //validationStatus={getSetValidationStatus(trainingResults, exercise.name, index)}
                                            key={currentUser + index.toString()}/>
                    )}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export const TrainingDetails = (trainingData: Training) => {

    return (

        <Accordion allowToggle>
            <Flex direction={"column"}>
                <Flex direction={"column"}>
                    {trainingData?.exercises.map((exercise: Exercise, index: number) =>
                        <AccordionItem borderColor={"transparent"} key={index}>
                            <Box key={exercise.name}>
                                <AccordionButton>
                                    <ExerciseCard name={exercise.name} sets={exercise.sets}/>
                                </AccordionButton>
                                <AccordionPanel p={0}>
                                    <ExerciseDetail exercise={exercise} trainingId={trainingData.id}/>
                                </AccordionPanel>
                            </Box>
                        </AccordionItem>
                    )}
                </Flex>
                <Spacer/>
            </Flex>
        </Accordion>
    );
};
