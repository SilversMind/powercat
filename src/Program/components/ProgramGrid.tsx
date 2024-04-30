import {ProgramData} from "../types";
import {ProgramMinia} from "./ProgramMinia";
import {Flex, Select} from "@chakra-ui/react";

interface ProgramGridProps {
    programs: ProgramData[];
    setActiveProgram: (program: ProgramData) => void;
}

export const ProgramGrid = ({programs, setActiveProgram}: ProgramGridProps) => {
    return (
        <Flex direction={"row"} align={"stretch"} w={"100vw"} justifyContent={"space-evenly"}>
            {programs?.map((program: ProgramData, index: number) =>
                <ProgramMinia key={index} name={program.name} nbTrainings={program.nbTrainings}
                              category={program.category} onClick={() => setActiveProgram(program)}/>
            )}
            <ProgramMinia name={"Importer"} category={"Custom"}/>
        </Flex>
    )
}

export const ProgramSelect = ({programs, setActiveProgram}: ProgramGridProps) => {
    return (
        <Select placeholder="Choisir un programme">
            {programs.map((program: ProgramData, index: number) =>
                <option key={index} value={program.name}>{program.name}</option>
            )}
        </Select>
    )
}