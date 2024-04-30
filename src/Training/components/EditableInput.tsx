import {Input} from "@chakra-ui/react";
import React, {ChangeEvent, useState} from "react";

interface EditableInputProps {
    value: number;
    isEditable: boolean;
}

export const EditableInput: React.FC<EditableInputProps> = ({value, isEditable}) => {
    const [editedContent, setEditedContent] = useState<number>(value);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEditedContent(Number(e.target.value));
    };
    return (
        <>
            {isEditable ? (
                <Input type={"number"} onChange={handleChange}
                       placeholder={value.toString()}
                       p={2} w="40px"/>) : editedContent}
        </>
    )
}