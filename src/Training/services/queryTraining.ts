import {useMutation, useQuery} from "react-query"
import {fetchCurrentTrainingResults, fetchTraining, updateCurrentTraining} from "./trainingService"
import {useUser} from "../../useUser"
import {queryClient} from "../../App";

export const trainingKey = "training"
export const trainingResultKey = "trainingResult"


export const useTraining = () => {
    const {currentUser} = useUser()
    const {isLoading, data: training} = useQuery([trainingKey, currentUser], () => fetchTraining(currentUser))
    return {isTrainingLoading: isLoading, training}
}

export const useCurrentTrainingResult = () => {
    const {currentUser} = useUser()
    const {
        isLoading,
        data: trainingResults
    } = useQuery([trainingResultKey, currentUser], () => fetchCurrentTrainingResults(currentUser))
    return {isLoading, trainingResults}
}

export const useUpdateTraining = () => {
    const result = useMutation(mutateUpdateTraining, {
        onSuccess: () => queryClient.invalidateQueries([trainingKey])
    })

    return {updateTraining: result.mutate, ...result}
}

const mutateUpdateTraining = (userName: string | undefined) => updateCurrentTraining(userName)