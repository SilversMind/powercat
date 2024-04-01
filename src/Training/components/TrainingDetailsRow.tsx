import {IconButton, Td, Tr} from "@chakra-ui/react";
import Colors from "../../colors";
import {CheckIcon, CloseIcon, EditIcon} from "@chakra-ui/icons";
import React, {useEffect, useState} from "react";
import {useUser} from "../../useUser";
import {Set} from "../types";
import {validateSet} from "../services/trainingService";
import {EditableInput} from "./EditableInput";

export type ExerciseDictionary = {
    [key: string]: ValidatedSet
}
type ValidatedSet = {
    [key: number]: boolean
};

function getValidationColor(isValidated: boolean | null) {
    let ValidationColor = Colors.LightPrimary
    if (isValidated !== null) {
        ValidationColor = isValidated ? Colors.Secondary : Colors.Tertiary
    }
    return ValidationColor
}


export const TrainingDetailsRow = ({
                                       set,
                                       idx,
                                       exerciseName,
                                       trainingId
                                   }: { set: Set, idx: number, exerciseName: string, trainingId: string }) => {
    let editableSet = set
    const [isValidated, setIsValidated] = useState(set.isValidated)
    const [isEditable, setIsEditable] = useState(false);
    const {currentUser} = useUser()
    const ValidationColor = getValidationColor(isValidated)

    useEffect(() => {
        setIsValidated(set.isValidated);
    }, [trainingId]);


    const handleEditClick = () => {
        setIsEditable(!isEditable);
    }

    const handleClick = (hasBeenPassed: boolean) => {
        setIsValidated(hasBeenPassed)
        validateSet(set, hasBeenPassed, exerciseName, trainingId)
    }

    if (!currentUser) return <h1>Nada</h1>

    return (
        <Tr bgColor={ValidationColor}>
            <Td>n° {idx + 1}</Td>
            <Td>
                <EditableInput value={set.reps} isEditable={isEditable}/>
            </Td>
            <Td>
                <EditableInput value={set.weight} isEditable={isEditable}/> kg
            </Td>
            <Td>
                <EditableInput value={set.rpe} isEditable={isEditable}/>
            </Td>
            <Td pl={0}>
                <IconButton
                    isActive={false}
                    isDisabled={isValidated !== null || isEditable}
                    variant='solid'
                    aria-label="passed"
                    size="xs"
                    bgColor={Colors.Secondary}
                    color={"white"}
                    icon={<CheckIcon/>}
                    m={2}
                    onClick={() => handleClick(true)}
                />
                <IconButton
                    isDisabled={isValidated !== null || isEditable}
                    variant='solid'
                    aria-label="failed"
                    size="xs"
                    bgColor={Colors.Tertiary}
                    color={"white"}
                    icon={<CloseIcon/>}
                    onClick={() => handleClick(false)}
                />
                <IconButton
                    isDisabled={isValidated !== null}
                    m={2}
                    variant='solid'
                    aria-label="passed"
                    size="xs"
                    icon={<EditIcon/>}
                    onClick={handleEditClick}
                />

            </Td>
        </Tr>
    )
}