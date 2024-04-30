import {Flex, Spacer, Text} from "@chakra-ui/react";
import {Exercise} from "../types";
import {formatName} from "./TrainingDetails";

interface ExerciseCardColumnInfosProps {
    name: string;
    value: number;
}

const ExerciseCardColumnInfos = ({
                                     name,
                                     value,
                                 }: ExerciseCardColumnInfosProps) => {
    return (
        <>
            <Flex flexDir={"column"} align="center">
                <Text>{name}</Text>
                <Text fontSize={"lg"}>{value}</Text>
            </Flex>
            <Spacer/>
        </>
    );
};

export const ExerciseCard = (exercise: Exercise) => {
    return (
        <Flex
            w={"90vw"}
            rounded={"md"}
            mt={4}
            justify="space-between"
            align="center"
        >
            <Flex m={4} fontWeight={"bold"}>
                {formatName(exercise.name)}
            </Flex>
            <ExerciseCardColumnInfos name={"Série"} value={exercise.sets.length}/>
            <ExerciseCardColumnInfos name={"Répétition"} value={exercise.sets[0].reps}/>
            <Flex flexDir={"column"} align="center">
                <Text>Poids</Text>
                <Flex>
                    <Text fontSize={"lg"}>{exercise.sets[0].weight}</Text>
                    <Text m={1} fontSize={"xs"}>
                        kg
                    </Text>
                </Flex>
            </Flex>
            <Spacer/>
            <ExerciseCardColumnInfos name={"RPE"} value={exercise.sets[0].rpe}/>
        </Flex>
    );
};
