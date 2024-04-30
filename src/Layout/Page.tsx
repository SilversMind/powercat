import React, {FC, PropsWithChildren} from "react"
import {Avatar, Flex, Tab, TabList, Tabs, Text} from "@chakra-ui/react"
import {useUser} from "../useUser";
import {useActiveUsers} from "../Profile/services/queryProfile"

export const Page: FC<PropsWithChildren> = ({children}) => {
    const {activeUsers} = useActiveUsers()
    const {updateCurrentUser} = useUser()


    return (
        <Flex
            direction="column"
            minHeight="100vh"
            align="center"
        >
            <Flex justify="flex-end" w="100%">
                <Flex p="6" w="100%">
                    <Tabs onChange={(index) => updateCurrentUser(activeUsers[index])} isFitted variant='enclosed'
                          w="100%">
                        <TabList>
                            <Tab>
                                <Text fontWeight={"semibold"} mt={2} mr={2}>
                                    Lolo
                                </Text>
                                <Avatar size="md" name="Lolo" src="/assets/ptitepoupoup.jpeg"/>
                            </Tab>
                            <Tab>
                                <Text fontWeight={"semibold"} mt={2} mr={2}>
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