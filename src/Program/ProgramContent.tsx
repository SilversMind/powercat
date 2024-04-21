import {Flex, Spinner, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import {usePrograms} from "./services/queryProgram";
import React from "react";
import {ProgramGrid} from "./components/ProgramGrid";
import {ProgramData} from "./types";

const ProgramPage = () => {
    const {programs, AreProgramsLoading} = usePrograms()
    if (!programs) return null

    if (AreProgramsLoading) return (
        <Flex margin="auto">
            <Spinner/>
        </Flex>
    )

    return (
        <Flex gap={4} direction={"column"}>
            <ProgramGrid programs={programs}/>
            <Tabs variant='solid-rounded' bg={"white"}>
                <TabList>
                    {programs?.map((program: ProgramData, index: number) => <Tab>Séance {program.id}</Tab>)}
                </TabList>

                <TabPanels>
                    {programs?.map((program: ProgramData, index: number) => <TabPanel>Séance {program.id}</TabPanel>)}
                </TabPanels>
            </Tabs>
        </Flex>

    )
}

export default ProgramPage