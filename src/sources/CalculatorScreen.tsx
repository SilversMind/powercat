import {PRInput, RPEDetails} from "../components/PRInput";
import {PRTableComponent} from "../components/PRTableComponent";
import React, {useState} from "react";

export const CalculatorScreen = () => {
    const [PRTable, setPRTable] = useState<RPEDetails[]>();
    return (
        <>
            <PRInput updatePRTable={setPRTable}/>
            <PRTableComponent PRTable={PRTable}/>
        </>
    )
}