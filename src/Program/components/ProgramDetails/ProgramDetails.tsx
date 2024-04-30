import {Flex} from "@chakra-ui/react";
import React from "react";
import {ProgramData} from "../../types";
import {ProgramDetailsContent} from "./ProgramDetailContent";
import {Training} from "../../../Training/types";

interface ProgramDetailsProps {
    program: ProgramData
}

export const ProgramDetails = ({program}: ProgramDetailsProps) => {
    return (
        <Flex direction={"column"} alignItems="center" m={2} gap={5}>
            {program?.trainings.map((training: Training, index: number) =>
                <ProgramDetailsContent key={index} exercises={training.exercises}
                                       trainingPosition={training.trainingPosition}/>
            )}
        </Flex>
    )
}