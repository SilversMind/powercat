import {Box, Flex, Grid, Progress} from "@chakra-ui/react";
import Colors from "../../settings/colors";

interface ProgramProgressInfoProps {
    programId: number
    nbTrainings: number
    trainingId: number
}

export const ProgramProgressInfo = ({programId, nbTrainings, trainingId}: ProgramProgressInfoProps) => {
    return (
        <Grid mt={1} w={"90vw"} h={"15vh"} bg={Colors.Primary} rounded={"md"}>
            <Flex fontWeight="bold" mt={4} color="white" justify="center" align="center">
                Programme {programId} - Semaine {trainingId} / {nbTrainings}
            </Flex>
            <Box m={4}>
                <Progress hasStripe colorScheme={"green"} value={(trainingId - 1) * 100 / nbTrainings}/>
            </Box>
        </Grid>
    )
};
