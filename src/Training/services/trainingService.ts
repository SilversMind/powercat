export const fetchTraining = async (trainingId: number | undefined) => {
    if (!trainingId) return
    const response = await fetch("http://192.168.1.16:8000/training/" + trainingId)
    const data = await response.json()
    return data
}