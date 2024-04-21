import Colors from "../../colors";
import {Flex} from "@chakra-ui/react";
import {categoryImages} from "../constants";

interface ProgramMiniaProps {
    name: string
    nbTrainings?: number
    category: string
}

export const ProgramMinia = ({name, nbTrainings, category}: ProgramMiniaProps) => {
    return (
        <>
            <Flex bg={Colors.Primary} flexDirection="column" align="center" m={2}>
                <Flex
                    fontWeight="bold"
                    fontSize={12}
                    mt={4}
                    justify="center"
                    w="25vw"
                    rounded="md"
                    color="white"
                >{name}</Flex>
                <Flex flex="1 1 auto" m={2}>
                    {categoryImages[category]}
                </Flex>
                {nbTrainings ? (
                    <Flex fontWeight="bold" align="center" color="white" justify="center" fontSize={10} mb={2} mr={2}
                          ml={2}>{nbTrainings} {(nbTrainings > 1) ? "séances" : "séance"}
                    </Flex>) : null}

            </Flex>
        </>
    )


}