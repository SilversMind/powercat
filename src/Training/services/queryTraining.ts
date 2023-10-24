import {useQuery} from "react-query";
import {fetchTraining} from "./trainingService";

export const trainingKey = "training"

export const useTraining = (username: string | undefined) => {
    const {isLoading, data: training} = useQuery([trainingKey, username], () => fetchTraining(username))
    return {isLoading, training}
}