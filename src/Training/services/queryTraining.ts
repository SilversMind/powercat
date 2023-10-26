import {useQuery} from "react-query"
import {fetchTraining} from "./trainingService"
import {useUser} from "../../useUser"

export const trainingKey = "training"

export const useTraining = () => {
    const {currentUser} = useUser()
    const {isLoading, data: training} = useQuery([trainingKey, currentUser], () => fetchTraining(currentUser))
    return {isLoading, training}
}