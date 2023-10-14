import {Button, Flex, Spacer} from '@chakra-ui/react'
import {ProgramProgressInfo} from "./ProgramProgressInfo";
import Colors from "../../settings/colors";
import {ExerciseCard} from "./ExerciseCard";

export const TrainingScreen = () => {
    return (
        <Flex direction={"column"} bgGradient='linear(to-b, #009688, #00443E)' w="100vw" h="100vh" align={"center"}>
            <ProgramProgressInfo/>
            <Flex fontWeight='bold' mt={4} justify={"center"} w={"25vw"} bg={Colors.Primary} rounded={"md"}
                  color={"white"}>Seance 8</Flex>
            <Flex flexDir={"column"}>
                <ExerciseCard name={"Squat"}/>
                <Spacer/>
                <ExerciseCard name={"Bench"}/>
                <Spacer/>
                <ExerciseCard name={"Deadlift"}/>
            </Flex>
            <Button bg={Colors.Secondary} border='2px' borderColor='white' color={"white"} size={"lg"}>
                Commencer la séance
            </Button>
        </Flex>
    );
}