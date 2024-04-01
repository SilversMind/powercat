import {useQuery} from "react-query";
import {fetchActiveUsers} from "./profileServices";
import {settings} from "../../setting";

export const profileKey = "profile"

export const useActiveUsers = () => {
    const {isLoading, data: activeUsers} = useQuery([profileKey], () => fetchActiveUsers(settings.defaultIPAddress))
    return {isTrainingLoading: isLoading, activeUsers: activeUsers ?? []}
}
