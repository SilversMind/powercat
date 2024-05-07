import {useUser} from "../useUser";
import {Avatar, Flex, Text} from "@chakra-ui/react";
import React from "react";

export const ProfilePage = () => {
    const {currentUser} = useUser()
    const filepath = `/assets/${currentUser}.jpeg`

    return (
        <Flex direction={"column"} align={"center"} m={4}>
            <Avatar size="2xl" name="Zouzou" src={filepath}/>
            <Flex mt={2}>
                <Text fontSize={"2xl"}>{currentUser}</Text>
            </Flex>
        </Flex>
    )

};
