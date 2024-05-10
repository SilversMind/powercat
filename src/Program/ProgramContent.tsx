import {Button, Flex, Select, Spinner} from "@chakra-ui/react";
import {usePrograms, useUpdateProgram} from "./services/queryProgram";
import React, {ChangeEvent, useState} from "react";
import {ProgramDetails} from "./components/ProgramDetails/ProgramDetails";
import {Block, Program} from "./types";
import {useUser} from "../useUser";
import {useNavigate} from "react-router-dom";

const ProgramPage = () => {
    const {currentUser} = useUser()
    const {programs, AreProgramsLoading} = usePrograms()
    const [activeProgram, setActiveProgram] = useState<Program>()
    const [activeBlock, setActiveBlock] = useState<Block>()
    const {updateProgram} = useUpdateProgram()
    const navigate = useNavigate();


    if (!currentUser || !programs) return null

    if (AreProgramsLoading) return (
        <Flex margin="auto">
            <Spinner/>
        </Flex>
    )

    const selectProgram = () => {
        updateProgram({userName: currentUser, programId: activeProgram!.id}, {
            onSuccess: () => {
                navigate("/");
            }
        })
    }
    const handleProgramChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedProgramId = e.target.value
        const selectedProgram = programs.find(program => program.id === selectedProgramId)
        setActiveProgram(selectedProgram)
        setActiveBlock(selectedProgram?.blocks[0])
    }

    const handleBlockChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedBlockId = e.target.value
        const selectedBlock = activeProgram?.blocks.find(block => block.id === selectedBlockId)
        setActiveBlock(selectedBlock)
    }

    return (
        <Flex gap={4} direction={"column"} align={"center"}>
            <Flex maxWidth={"80vw"} direction={"column"} alignItems={"center"}>
                <Select defaultValue={""} onChange={handleProgramChange}>
                    <option hidden value="">Choisis ton programme 🐱</option>
                    {programs?.map((program: Program, index: number) =>
                        <option value={program.id} key={index}>{program.name}</option>)}
                </Select>
                {
                    activeProgram &&
                    <Flex maxWidth={"60vw"}>
                        <Select onChange={handleBlockChange}>
                            {activeProgram.blocks?.map((block: Block, index: number) =>
                                <option value={block.id} key={index}>{block.name}</option>)}
                        </Select>
                    </Flex>
                }
            </Flex>
            {
                activeProgram && activeBlock &&
                <>
                    <ProgramDetails program={activeProgram} selectedBlock={activeBlock}/>
                    <Button onClick={selectProgram}>Commencer {activeProgram.name}</Button>
                </>
            }
        </Flex>

    )
}

export default ProgramPage