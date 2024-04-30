import {useUser} from "../../useUser";
import {useMutation, useQuery} from "react-query";
import {fetchProgramMetadata, fetchPrograms, updateCurrentProgram} from "./programService";
import {queryClient} from "../../App";

export const programKey = "program"
export const programsKey = "programs"

interface mutateUpdateProgramProps {
    programId: string
    userName: string
}

export const useProgram = () => {
    const {currentUser} = useUser()
    const {isLoading, data: program} = useQuery([programKey, currentUser], () => fetchProgramMetadata(currentUser))
    return {isProgramLoading: isLoading, program}
}

export const useUpdateProgram = () => {
    const result = useMutation(mutateUpdateProgram, {
        onSuccess: () => queryClient.invalidateQueries([programKey])
    })

    return {updateProgram: result.mutate, ...result}
}

export const usePrograms = () => {
    const {currentUser} = useUser()
    const {isLoading, data: programs} = useQuery([programsKey, currentUser], () => fetchPrograms(currentUser))
    return {AreProgramsLoading: isLoading, programs}
}

const mutateUpdateProgram = ({
                                 programId,
                                 userName
                             }: mutateUpdateProgramProps) => updateCurrentProgram(programId, userName)
