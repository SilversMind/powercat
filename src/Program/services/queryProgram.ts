import {useUser} from "../../useUser";
import {useQuery} from "react-query";
import {fetchProgramMetadata, fetchPrograms} from "./programService";

export const programKey = "program"

export const useProgram = () => {
    const {currentUser} = useUser()
    const {isLoading, data: program} = useQuery([programKey, currentUser], () => fetchProgramMetadata(currentUser))
    return {isProgramLoading: isLoading, program}
}

export const usePrograms = () => {
    const {isLoading, data: programs} = useQuery([], () => fetchPrograms())
    return {AreProgramsLoading: isLoading, programs}
}