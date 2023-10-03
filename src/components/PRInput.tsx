import React, {FormEvent, useState} from "react";

interface PRInputProps {
    updatePRTable: (value: RPEDetails[] | undefined) => void
}

export interface RPEDetails {
    rpe: number
    weights: number[]
}

export const PRInput = ({ updatePRTable }: PRInputProps) => {
    const [PRValue, setPRValue] = useState<number>()

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ PR: PRValue })
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        fetch('http://127.0.0.1:8000/calculator', requestOptions)
        .then(response => response.json())
        .then(data => {
            updatePRTable(data.rpeTables);
        }).catch(error => console.error('Erreur :', error));}

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <label>
                Bench PR:
                <input
                    value={PRValue}
                    type="number"
                    onChange={(e) => {
                        setPRValue(e.target.valueAsNumber)
                    }}/>
            </label>
            <button type="submit">Valider</button>
        </form>
    )
}