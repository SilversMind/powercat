import {AspectRatio, Button, Flex, Image, Text} from "@chakra-ui/react";
import React from "react";
import {useNavigate} from "react-router-dom";

export const NoTraining = () => {
    const navigate = useNavigate();
    return (
        <Flex m={20} direction="column" align={"center"}>
            <Text>Pas de programme en cours !</Text>
            <Flex minW={"40vw"} minH={"60vw"} m={10}>
                <AspectRatio maxW='40vw' ratio={1}>
                    <Image minW={"40vw"} minH={"60vw"} src={"/assets/memes_cat/crispy_cat.png"} alt={"Nervous cat"}/>
                </AspectRatio>
            </Flex>
            <Button
                border="2px"
                size="lg"
                onClick={() => navigate('/programs')}
            >
                Voir les programmes
            </Button>
        </Flex>)
}