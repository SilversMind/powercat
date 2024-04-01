import {useUser} from "../../useUser";
import {useQuery} from "react-query";
import {fetchProgramMetadata} from "./programService";

export const programKey = "program"

export const useProgram = () => {
    const {currentUser} = useUser()
    const {isLoading, data: program} = useQuery([programKey, currentUser], () => fetchProgramMetadata(currentUser))
    return {isProgramLoading: isLoading, program}
}