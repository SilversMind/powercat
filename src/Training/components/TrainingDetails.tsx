import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Spacer,
    Table,
    TableContainer,
    Tbody,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import Colors from "../../colors";
import {ExerciseCard} from "./ExerciseCard";
import {Training} from "../types";
import {TrainingDetailsRow} from "./TrainingDetailsRow";
import {useUser} from "../../useUser";

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

const ExerciseDetail = ({set, rpe, reps, weight, exerciseName}: ExerciseDetailProps) => {
    const {currentUser} = useUser()
    return (
        <TableContainer
            ml={"10vw"}
            w={"80vw"}
            rounded={25}
            bg={Colors.LightPrimary}
        >
            <Table
                variant="stripped"
                color={"white"}
                layout={"fixed"}
                className={"no-padding"}
            >
                <Thead>
                    <Tr>
                        <Th w={"0px"}>Série</Th>
                        <Th fontSize={"8px"} maxWidth={"10px"}>
                            Répétitions
                        </Th>
                        <Th fontSize={"10px"} maxWidth={"10px"}>
                            Poids
                        </Th>
                        <Th fontSize={"10px"} maxWidth={"10px"}>
                            RPE
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {Array.from({length: set}).map((_: any, index: number) =>
                        <TrainingDetailsRow reps={reps} weight={weight} rpe={rpe} index={index}
                                            exerciseName={exerciseName}
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
                    {trainingData?.exercises.map((exercise: ExerciseDetailProps, index: number) =>
                        <AccordionItem borderColor={"transparent"} key={index}>
                            <Box key={exercise.exerciseName}>
                                <AccordionButton>
                                    <ExerciseCard
                                        exerciseName={formatName(exercise.exerciseName)}
                                        set={exercise.set}
                                        rpe={exercise.rpe}
                                        reps={exercise.reps}
                                        weight={exercise.weight}
                                    />
                                </AccordionButton>
                                <AccordionPanel p={0}>
                                    <ExerciseDetail
                                        exerciseName={exercise.exerciseName}
                                        set={exercise.set}
                                        rpe={exercise.rpe}
                                        reps={exercise.reps}
                                        weight={exercise.weight}
                                    />
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
