import {Page} from "../Layout/Page";
import {TrainingContent} from "./TrainingContent";
import {useProgram} from "../Program/services/queryProgram";
import {useTraining} from "./services/queryTraining";
import {Flex, Spinner} from "@chakra-ui/react";
import React from "react";

const TrainingPage = () => {
    const {program, isProgramLoading} = useProgram()
    const {training, isTrainingLoading} = useTraining()

    if (isProgramLoading || isTrainingLoading) return (
        <Flex margin="auto">
            <Spinner/>
        </Flex>
    )


    return (
        <Page>
            <TrainingContent/>
        </Page>
    )
}

export default TrainingPage