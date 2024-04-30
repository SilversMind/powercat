import {Button, Flex, Spinner} from "@chakra-ui/react";
import {usePrograms, useUpdateProgram} from "./services/queryProgram";
import React, {useEffect, useState} from "react";
import {ProgramGrid} from "./components/ProgramGrid";
import {ProgramDetails} from "./components/ProgramDetails/ProgramDetails";
import {ProgramData} from "./types";
import {useUser} from "../useUser";
import {useNavigate} from "react-router-dom";

const ProgramPage = () => {
    const {currentUser} = useUser()
    const {programs, AreProgramsLoading} = usePrograms()
    const [activeProgram, setActiveProgram] = useState<ProgramData>()
    const {updateProgram} = useUpdateProgram()
    const navigate = useNavigate();


    useEffect(() => {
        if (programs) setActiveProgram(programs[0])
    }, [programs])

    if (!currentUser || !programs || !activeProgram) return null

    if (AreProgramsLoading) return (
        <Flex margin="auto">
            <Spinner/>
        </Flex>
    )

    const selectProgram = () => {
        updateProgram({userName: currentUser, programId: activeProgram.id}, {
            onSuccess: () => {
                navigate("/");
            }
        })
    }

    return (
        <Flex gap={4} direction={"column"}>
            <ProgramGrid programs={programs} setActiveProgram={setActiveProgram}/>
            <ProgramDetails program={activeProgram}/>
            <Button onClick={selectProgram}>Commencer {activeProgram.name}</Button>
        </Flex>

    )
}

export default ProgramPage