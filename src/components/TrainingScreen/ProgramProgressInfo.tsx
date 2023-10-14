import {Box, Flex, Grid, Progress} from "@chakra-ui/react";
import Colors from "../../settings/colors";
export const ProgramProgressInfo = () => {

    return (
        <Grid mt={150} w={"90vw"} h={"15vh"} bg={Colors.Primary} rounded={"md"}>
            <Flex fontWeight='bold' mt={4} color='white' justify={"center"}>Programme 1 - Semaine 8 / 10</Flex>
            <Box m={4}>
                <Progress value={80} />
            </Box>
            <Flex mb={4} color='white' justify={"center"} fontWeight='bold'>Peaking - Semaine 1 / 3</Flex>
        </Grid>
    )
}