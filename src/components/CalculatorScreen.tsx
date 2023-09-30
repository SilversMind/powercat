import {PRInput, RPEDetails} from "./PRInput";
import {PRTableComponent} from "./PRTableComponent";
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