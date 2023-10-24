import {IconButton, Td, Tr} from "@chakra-ui/react";
import Colors from "../../settings/colors";
import {CheckIcon, CloseIcon} from "@chakra-ui/icons";
import {useState} from "react";

type TrainingDetailsRowProps = {
    reps: number,
    weight: number,
    rpe: number,
    index: number
}

enum Validation {
    PASS,
    FAIL,
    WAITING
}


export const TrainingDetailsRow = ({rpe, reps, weight, index}: TrainingDetailsRowProps) => {
    const [ValidationStatus, setValidationStatus] = useState(Validation.WAITING)
    let backgroundColor;
    switch (ValidationStatus) {
        case Validation.PASS:
            backgroundColor = Colors.Secondary;
            break;
        case Validation.FAIL:
            backgroundColor = Colors.Tertary;
            break;
        default:
            backgroundColor = Colors.LightPrimary;
    }

    return (
        <Tr key={index} bgColor={backgroundColor}>
            <Td>n° {index + 1}</Td>
            <Td>{reps}</Td>
            <Td>{weight} kg</Td>
            <Td>{rpe}</Td>
            <Td pl={0}>
                <IconButton
                    isActive={false}
                    isDisabled={ValidationStatus !== Validation.WAITING}
                    variant='solid'
                    aria-label="passed"
                    size="xs"
                    bgColor={Colors.Secondary}
                    color={"white"}
                    icon={<CheckIcon/>}
                    m={2}
                    onClick={() => setValidationStatus(Validation.PASS)}
                />
                <IconButton
                    isDisabled={ValidationStatus !== Validation.WAITING}
                    variant='solid'
                    aria-label="passed"
                    size="xs"
                    bgColor={Colors.Tertary}
                    color={"white"}
                    icon={<CloseIcon/>}
                    onClick={() => setValidationStatus(Validation.FAIL)}
                />

            </Td>
        </Tr>
    )
}