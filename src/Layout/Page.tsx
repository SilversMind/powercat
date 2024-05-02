import React, {FC, PropsWithChildren} from "react"
import {
    Avatar,
    Button,
    Divider,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Text,
    useDisclosure
} from "@chakra-ui/react"
import {useUser} from "../useUser";
import {useActiveUsers} from "../Profile/services/queryProfile"

interface ProfileAvatarProps {
    username: string
}

const ProfileAvatar = ({username}: ProfileAvatarProps) => {
    if (!username) return null
    const filepath = `/assets/${username}.jpeg`
    return (
        <Flex>
            <Flex mr={2} align={"center"}>
                <Text>{username}</Text>
            </Flex>
            <Avatar size="xs" name="Zouzou" src={filepath}/>
        </Flex>
    )
}

export const Page: FC<PropsWithChildren> = ({children}) => {
    const {activeUsers} = useActiveUsers()
    const {currentUser, updateCurrentUser} = useUser()
    const {isOpen, onOpen, onClose} = useDisclosure()


    return (
        <Flex
            direction="column"
            minHeight="100vh"
            align="center"
        >
            <Flex justify="flex-end" w="100%">
                <Flex w="25%" justify={"flex-end"} m={2} mt={4}>
                    <Button bg={"white"} onClick={onOpen}>
                        <ProfileAvatar username={currentUser}/>
                    </Button>
                    <Drawer placement='top' onClose={onClose} isOpen={isOpen}>
                        <DrawerOverlay/>
                        <DrawerContent>
                            <DrawerBody>
                                <Flex direction={"column"} justify={"center"} m={2}>
                                    <Button>Voir profil</Button>
                                    <Divider h={2}/>
                                    <Flex direction={"column"} justify={"center"} align={"center"}>
                                        <Text>Autre profils</Text>
                                        {activeUsers.filter(username => username !== currentUser).map((username: string, index: number) =>
                                            <Button key={index} onClick={() => {
                                                updateCurrentUser(username)
                                                onClose()
                                            }}>
                                                <ProfileAvatar username={username}/>
                                            </Button>)}
                                    </Flex>
                                </Flex>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </Flex>

            </Flex>

            {children}
        </Flex>
    );
}