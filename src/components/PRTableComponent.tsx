import React from "react";
import {RPEDetails} from "./PRInput";

interface PRTableProps {
    PRTable: RPEDetails[] | undefined
}

export const PRTableComponent = ({ PRTable }: PRTableProps) => {
    console.log(PRTable)
    if (!PRTable) return null

    return (
        <>
            <p>
                <b>PR théorique par répétition</b>
            </p>
            <table>
                <tbody>
                    <tr>
                        <td>RPE\Répétitions</td>
                        {PRTable[0]?.weights.map((_, index) => <td>{index+1}</td>)}
                    </tr>
                    {PRTable?.map((rpedetail) => (
                        <tr>
                            <td>{rpedetail.rpe}</td>
                            {rpedetail.weights.map((pr) => <td>{pr}</td>)}
                        </tr>
                    ))}

                </tbody>
            </table>
        </>)
}
