import React, { useEffect, useState } from "react";
import {TrainingProps} from "../TrainingScreen/Training";
import {TrainingScreen} from "../TrainingScreen/TrainingScreen";

export const HomeScreen = () => {
    const [TrainingData, setTrainingData] = useState<TrainingProps| null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/training/');
                const data = await response.json();
                setTrainingData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();

    }, []);


    if (!TrainingData) return <p>Loading</p>
    return (
        <TrainingScreen />
    );
}