import Colors from "../settings/colors"
import React, {FC, PropsWithChildren} from "react"
import {Avatar, Flex, Tab, TabList, Tabs, Text} from "@chakra-ui/react"
import {NAMES, useUser} from "../useUser";

export const Page: FC<PropsWithChildren> = ({children}) => {
    const {updateCurrentUser} = useUser()

    return (
        <Flex
            direction="column"
            bgGradient={Colors.Background}
            minHeight="100vh"
            align="center"
        >
            <Flex justify="flex-end" w="100%">

                <Flex p="6" color="white" w="100%">
                    <Tabs onChange={(index) => updateCurrentUser(NAMES[index])} isFitted variant='enclosed' w="100%">
                        <TabList>
                            <Tab>
                                <Text fontWeight={"semibold"} mt={2} mr={2} color={"white"}>
                                    Lolo
                                </Text>
                                <Avatar size="md" name="Lolo" src="/assets/ptitepoupoup.jpeg"/>
                            </Tab>
                            <Tab>
                                <Text fontWeight={"semibold"} mt={2} mr={2} color={"white"}>
                                    Zouzou
                                </Text>
                                <Avatar size="md" name="Zouzou" src="/assets/hocouscous.jpeg"/>
                            </Tab>
                        </TabList>
                    </Tabs>
                </Flex>

            </Flex>
            {children}
        </Flex>
    )
}