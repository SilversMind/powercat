import Colors from "../../colors";
import {Flex, Spacer, Text} from "@chakra-ui/react";
import {ExerciseDetailProps} from "./TrainingDetails";

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
            <Flex flexDir={"column"} color={"white"} align="center">
                <Text>{name}</Text>
                <Text fontSize={"lg"}>{value}</Text>
            </Flex>
            <Spacer/>
        </>
    );
};

export const ExerciseCard = ({
                                 exerciseName,
                                 set,
                                 reps, rpe,
                                 weight
                             }: ExerciseDetailProps) => {
    return (
        <Flex
            bg={Colors.Primary}
            w={"90vw"}
            rounded={"md"}
            mt={4}
            justify="space-between"
            align="center"
        >
            <Flex m={4} color={"white"} fontWeight={"bold"}>
                {exerciseName}
            </Flex>
            <ExerciseCardColumnInfos name={"Série"} value={set}/>
            <ExerciseCardColumnInfos name={"Répétition"} value={reps}/>
            <Flex flexDir={"column"} color={"white"} align="center">
                <Text>Poids</Text>
                <Flex>
                    <Text fontSize={"lg"}>{weight}</Text>
                    <Text m={1} fontSize={"xs"}>
                        kg
                    </Text>
                </Flex>
            </Flex>
            <Spacer/>
            <ExerciseCardColumnInfos name={"RPE"} value={rpe}/>
        </Flex>
    );
};
