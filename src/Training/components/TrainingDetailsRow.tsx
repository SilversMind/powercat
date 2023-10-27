import {IconButton, Td, Tr} from "@chakra-ui/react";
import Colors from "../../colors";
import {CheckIcon, CloseIcon} from "@chakra-ui/icons";
import {useEffect, useState} from "react";
import {useUser} from "../../useUser";
import {Set} from "../types";
import {validateSet} from "../services/trainingService";

export type ExerciseDictionary = {
    [key: string]: ValidatedSet
}
type ValidatedSet = {
    [key: number]: boolean
};

export enum Validation {
    PASS,
    FAIL,
    WAITING
}

const ValidationColor: { [key in Validation]: string } = {
    [Validation.FAIL]: Colors.Tertiary,
    [Validation.PASS]: Colors.Secondary,
    [Validation.WAITING]: Colors.LightPrimary
}

export const TrainingDetailsRow = ({
                                       rpe,
                                       reps,
                                       weight,
                                       id,
                                       exerciseName,
                                       validationStatus: previousValidationStatus
                                   }: Set) => {
    const [validationStatus, setValidationStatus] = useState(previousValidationStatus)
    const {currentUser} = useUser()

    const handleClick = (status: Validation, exerciseName: string) => {
        setValidationStatus(status)
        const isValidated: boolean = status === Validation.PASS
        validateSet({rpe, reps, weight, id: id, exerciseName}, isValidated)
    }

    useEffect(() => {
        setValidationStatus(previousValidationStatus)
    }, [currentUser, exerciseName, previousValidationStatus])

    if (!currentUser) return <h1>Nada</h1>

    return (
        <Tr bgColor={ValidationColor[validationStatus]}>
            <Td>n° {id + 1}</Td>
            <Td>{reps}</Td>
            <Td>{weight} kg</Td>
            <Td>{rpe}</Td>
            <Td pl={0}>
                <IconButton
                    isActive={false}
                    isDisabled={validationStatus !== Validation.WAITING}
                    variant='solid'
                    aria-label="passed"
                    size="xs"
                    bgColor={Colors.Secondary}
                    color={"white"}
                    icon={<CheckIcon/>}
                    m={2}
                    onClick={() => handleClick(Validation.PASS, exerciseName)}
                />
                <IconButton
                    isDisabled={validationStatus !== Validation.WAITING}
                    variant='solid'
                    aria-label="passed"
                    size="xs"
                    bgColor={Colors.Tertiary}
                    color={"white"}
                    icon={<CloseIcon/>}
                    onClick={() => handleClick(Validation.FAIL, exerciseName)}
                />

            </Td>
        </Tr>
    )
}