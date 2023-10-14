import React, {useState} from 'react';
import './App.css';
import {CalculatorScreen} from "./components/PRCalculatorScreen/CalculatorScreen";

function App() {
    const [page, setPage] = useState("CalculatorPage")
    const switchPage = () => {
        setPage("HomePagePage");
    }


    return (
        <>
        {page === "CalculatorPage" ? <CalculatorScreen/> : <p>Welcome !</p>}
            <button onClick={switchPage}>Go to seance planner</button>
        </>
    )
}

export default App;
