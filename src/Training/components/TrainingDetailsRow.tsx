import {IconButton, Td, Tr} from "@chakra-ui/react";
import Colors from "../../colors";
import {CheckIcon, CloseIcon} from "@chakra-ui/icons";
import {useEffect, useState} from "react";
import {useUser} from "../../useUser";

type TrainingDetailsRowProps = {
    exerciseName: string,
    reps: number,
    weight: number,
    rpe: number,
    index: number
}
type ExerciseDictionary = {
    [key: string]: ValidatedSet
}
type ValidatedSet = {
    [key: number]: boolean
};

enum Validation {
    PASS,
    FAIL,
    WAITING
}

const ValidationColor: { [key in Validation]: string } = {
    [Validation.FAIL]: Colors.Tertiary,
    [Validation.PASS]: Colors.Secondary,
    [Validation.WAITING]: Colors.LightPrimary
}

export const TrainingDetailsRow = ({rpe, reps, weight, index, exerciseName}: TrainingDetailsRowProps) => {
    const [validationStatus, setValidationStatus] = useState(Validation.WAITING)
    const {currentUser} = useUser()

    const handleClick = (status: Validation, exerciseName: string) => {
        setValidationStatus(status)
        const storeDataString = localStorage.getItem(currentUser!);
        const isValidated: boolean = status === Validation.PASS
        let storeData: ExerciseDictionary = {}
        if (!storeDataString) {
            const exercise: ValidatedSet = {}
            exercise[index] = isValidated
            storeData[exerciseName] = exercise
        } else {
            storeData = JSON.parse(storeDataString)
            if (storeData[exerciseName]) {
                storeData[exerciseName][index] = isValidated
            } else {
                const exercise: ValidatedSet = {}
                exercise[index] = isValidated
                storeData[exerciseName] = exercise
                storeData[exerciseName][index] = isValidated
            }
        }
        localStorage.setItem(currentUser!, JSON.stringify(storeData))
    }

    const getPreviousStatus = (exerciseName: string) => {
        const storeDataString = localStorage.getItem(currentUser!)
        if (storeDataString) {
            const storeData = JSON.parse(storeDataString)
            if (storeData[exerciseName] && storeData[exerciseName].hasOwnProperty(index)) {
                return storeData[exerciseName][index] ? Validation.PASS : Validation.FAIL
            }
        }
        return Validation.WAITING
    }

    useEffect(() => {
        setValidationStatus(getPreviousStatus(exerciseName))
    }, [currentUser, exerciseName])

    if (!currentUser) return <h1>Nada</h1>

    return (
        <Tr bgColor={ValidationColor[validationStatus]}>
            <Td>n° {index + 1}</Td>
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