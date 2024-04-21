import {Image} from "@chakra-ui/react";
import React from 'react';


export const categoryImages: { [key: string]: JSX.Element } = {
    Peaking: <Image src='/assets/atlas.png' alt='Atlas' boxSize='60px' w='100%'/>,
    Technique: <Image src='/assets/compass.png' alt='Compass' boxSize='60px' w='100%'/>,
    Custom: <Image src='/assets/feather.png' alt='Feather' boxSize='60px' w='100%'/>
};