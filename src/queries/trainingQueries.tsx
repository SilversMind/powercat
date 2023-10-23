export const fetchTrainingData = async (trainingId: number) => {
    try {
        const response = await fetch("http://192.168.1.16:8000/training/" + trainingId);
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error fetching data:", error);
    }

};