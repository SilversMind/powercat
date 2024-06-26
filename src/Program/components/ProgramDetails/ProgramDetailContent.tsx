import {Box, Divider, Flex} from "@chakra-ui/react";
import {ExerciseCard} from "../../../Training/components/ExerciseCard";
import React from "react";
import {Exercise} from "../../../Training/types";

interface ProgramDetailsContentProps {
    exercises: Exercise[]
    trainingPosition: number
}

export const ProgramDetailsContent = ({exercises, trainingPosition}: ProgramDetailsContentProps) => {
    return (
        <Box>
            <Flex
                fontSize={"xl"}
                fontWeight="bold"
                justify="center"
                w="25vw"
                rounded="md"
            >Séance {trainingPosition}</Flex>
            <Divider/>
            <Flex direction={"column"}>
                {exercises?.map((exercise: Exercise, index: number) =>
                    <ExerciseCard name={exercise.name} sets={exercise.sets} key={index}/>
                )}
            </Flex>
        </Box>
    )
}