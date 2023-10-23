import {useQuery} from "react-query";
import {fetchTraining} from "./trainingService";

export const trainingKey = "training"

export const useTraining = (trainingId: number | undefined) => {
    const {isLoading, data: training} = useQuery([trainingKey], () => fetchTraining(trainingId))
    return {isLoading, training}
}