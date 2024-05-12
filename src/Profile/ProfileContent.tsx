import {useUser} from "../useUser";
import {Avatar, Button, Flex, Heading, Text} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {useProfile} from "./services/queryProfile";
import {EditIcon} from "@chakra-ui/icons";
import {EditableInput} from "../Training/components/EditableInput";
import {PR} from "../Training/types";

const ExercisePR = ({name, pr, isEditable}: { name: string; pr: number; isEditable: boolean; }) => {
    return (
        <Flex justify="space-between" alignItems="center" mt={4}>
            <Text fontSize={"lg"}>
                {name}
            </Text>
            <Flex gap="5%" alignItems="center">
                <EditableInput value={pr} isEditable={isEditable}/>
                <Text>kgs</Text>
            </Flex>
        </Flex>
    )

}


export const ProfileContent = () => {
    const {currentUser} = useUser()
    const {isProfileLoading, profile} = useProfile()
    const [prList, setPRList] = useState<PR>()
    const [isEditable, setIsEditable] = useState<boolean>(false)

    useEffect(() => {
        if (profile)
            setPRList(profile.PR)
    }, [profile])

    const filepath = `/assets/${currentUser}.jpeg`

    const handleEditClick = () => {
        setIsEditable(!isEditable)
    }
    
    if (isProfileLoading || !profile || !prList) return null

    return (
        <>
            <Flex direction={"column"} align={"center"} m={4}>
                <Avatar size="2xl" name={profile.name} src={filepath}/>
                <Flex mt={2}>
                    <Text fontSize={"2xl"}>{profile.name}</Text>
                </Flex>
            </Flex>
            <Flex direction={"column"} justify={"flex-start"} m={4}>
                <Flex alignItems={"center"}>
                    <Heading size={"lg"}>
                        Personal Records
                    </Heading>
                    <Button p={2} onClick={handleEditClick}>
                        <EditIcon/>
                    </Button>
                </Flex>
                <ExercisePR name="Squat" pr={prList.squat} isEditable={isEditable}/>
                <ExercisePR name="Bench" pr={prList.bench} isEditable={isEditable}/>
                <ExercisePR name="Deadlift" pr={prList.deadlift} isEditable={isEditable}/>
            </Flex>
        </>
    )

};
