import {Box, Flex, Grid, Progress} from "@chakra-ui/react";
import React from "react";

interface ProgramProgressInfoProps {
    trainingId: number
    programId: string
    nbTraining: number
}

export const ProgramProgressInfo = ({programId, trainingId, nbTraining}: ProgramProgressInfoProps) => {
    // FIXME values

    return (
        <Grid mt={1} w={"90vw"} h={"15vh"} rounded={"md"}>
            <Flex fontWeight="bold" mt={4} justify="center" align="center">
                Programme {programId} - Semaine {trainingId} / {nbTraining}
            </Flex>
            <Box m={4}>
                <Progress hasStripe value={(trainingId - 1) * 100 / nbTraining}/>
            </Box>
        </Grid>
    )
};
