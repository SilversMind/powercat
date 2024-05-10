import {Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex} from "@chakra-ui/react";
import React from "react";
import {Block, Program, SubBlock} from "../../types";
import {ProgramDetailsContent} from "./ProgramDetailContent";
import {Training} from "../../../Training/types";

interface ProgramDetailsProps {
    program: Program
    selectedBlock?: Block
}

export const ProgramDetails = ({program, selectedBlock}: ProgramDetailsProps) => {

    if (!program.blocks) {
        return (
            <Flex direction={"column"} alignItems="center" m={2} gap={5}>
                {program?.trainings.map((training: Training, index: number) =>
                    <ProgramDetailsContent key={index} exercises={training.exercises}
                                           trainingPosition={training.trainingPosition}/>
                )}
            </Flex>
        )
    }
    return (
        <Accordion allowToggle>
            {selectedBlock?.subBlocks.map((subblock: SubBlock, index: number) =>
                <AccordionItem key={index}>
                    <AccordionButton>
                        <Box as='span' flex='1' textAlign='center'>
                            {subblock.name}
                        </Box>
                        <AccordionIcon/>
                    </AccordionButton>

                    <AccordionPanel pb={4}>
                        <Flex direction={"column"} alignItems="center" m={2} gap={5}>
                            {program?.trainings.slice(subblock.startTrainingId, subblock.endTrainingId + 1).map((training: Training, index: number) =>
                                <ProgramDetailsContent key={index} exercises={training.exercises}
                                                       trainingPosition={training.trainingPosition}/>
                            )}
                        </Flex>
                    </AccordionPanel>
                </AccordionItem>
            )}


        </Accordion>
    )
}