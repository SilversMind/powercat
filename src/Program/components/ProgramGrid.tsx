import {ProgramData} from "../types";
import {ProgramMinia} from "./ProgramMinia";
import {Flex} from "@chakra-ui/react";

interface ProgramGridProps {
    programs: ProgramData[];
}

export const ProgramGrid = ({programs}: ProgramGridProps) => {
    console.log(programs)
    return (
        <Flex direction={"row"}>
            {programs?.map((program: ProgramData, index: number) =>
                <ProgramMinia key={index} name={program.name} nbTrainings={program.nbTrainings}
                              category={program.category}/>
            )}
            <ProgramMinia name={"Importer"} category={"Custom"}/>
        </Flex>
    )
}
