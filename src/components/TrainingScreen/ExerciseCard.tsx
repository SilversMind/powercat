import Colors from "../../settings/colors";
import {Flex, Text, Box, Spacer} from "@chakra-ui/react";

interface ExerciseCardColumnInfosProps {
    name: string
    value: number
}
const ExerciseCardColumnInfos = ({name, value}: ExerciseCardColumnInfosProps) => {
    return (
        <>
        <Flex flexDir={"column"} color={"white"} align="center">
            <Text >{name}</Text>
            <Text fontSize={"lg"}>{value}</Text>
        </Flex>
        <Spacer />
        </>
    )
}
interface ExerciseCardProps {
    name: string
}

export const ExerciseCard = ({name}: ExerciseCardProps) => {

    return (
        <Flex p={2} bg={Colors.Primary} w={"90vw"} rounded={"md"} mt={4} mb={4} justify="space-between" align="center">
            <Flex m={4} color={"white"} fontWeight={"bold"}>{name}</Flex>
            <ExerciseCardColumnInfos name={"Série"} value={3}/>
            <ExerciseCardColumnInfos name={"Répétition"} value={5}/>
            <Flex flexDir={"column"} color={"white"} align="center">
                <Text >Poids</Text>
                <Flex>
                    <Text fontSize={"lg"}>70</Text>
                    <Text m={1} fontSize={"xs"}>kg</Text>
                </Flex>

            </Flex>
            <Spacer />
            <ExerciseCardColumnInfos name={"RPE"} value={8}/>
        </Flex>
    )
}