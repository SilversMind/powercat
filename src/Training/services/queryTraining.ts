import {useQuery} from "react-query"
import {fetchCurrentTrainingResults, fetchTraining} from "./trainingService"
import {useUser} from "../../useUser"

export const trainingKey = "training"
export const trainingResultKey = "trainingResult"


export const useTraining = () => {
    const {currentUser} = useUser()
    const {isLoading, data: training} = useQuery([trainingKey, currentUser], () => fetchTraining(currentUser))
    return {isLoading, training}
}

export const useCurrentTrainingResult = () => {
    const {currentUser} = useUser()
    const {
        isLoading,
        data: trainingResults
    } = useQuery([trainingResultKey, currentUser], () => fetchCurrentTrainingResults(currentUser))
    return {isLoading, trainingResults}
}