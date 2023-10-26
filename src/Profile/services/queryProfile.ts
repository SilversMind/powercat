import {useQuery} from "react-query";
import {fetchActiveUsers} from "./profileServices";

export const profileKey = "profile"

export const useActiveUsers = () => {
    const {isLoading, data: activeUsers} = useQuery([profileKey], () => fetchActiveUsers())
    return {isLoading, activeUsers: activeUsers ?? []}
}
