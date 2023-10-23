import Colors from "../settings/colors"
import React, {FC, PropsWithChildren, useEffect, useState} from "react"
import {Avatar, Flex, Text} from "@chakra-ui/react"
import {User} from "../Training/types"
import {fetchProfileData} from "../queries/profileQueries"
import {useNavigate} from "react-router-dom";

export const Page: FC<PropsWithChildren> = ({children}) => {
    const navigate = useNavigate()
    const [user, setUser] = useState<User>()

    useEffect(() => {
        fetchProfileData("Lolo")
            .then(profile => {
                setUser(profile)
            })
    }, [])

    return (
        <Flex
            direction="column"
            bgGradient={Colors.Background}
            w="100vw"
            h="100vh"
            align="center"
        >
            <Flex justify="flex-end" w="100%" onClick={() => navigate('/profile')}>
                <Flex p="6" color="white">
                    <Text fontWeight={"semibold"} mt={2} mr={2}>
                        {user?.name}
                    </Text>
                    <Avatar size="md" name={user?.name} src="/assets/ptitepoupoup.jpeg"/>
                </Flex>
            </Flex>
            {children}
        </Flex>
    )
}