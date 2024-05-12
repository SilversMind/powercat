import {useQuery} from "react-query";
import {fetchActiveUsers, fetchUserProfile} from "./profileServices";
import {useUser} from "../../useUser";

export const activeUserKey = "activeUser"
export const profileKey = "profile"

export const useActiveUsers = () => {
    const {isLoading, data: activeUsers} = useQuery([activeUserKey], () => fetchActiveUsers())
    return {isTrainingLoading: isLoading, activeUsers: activeUsers ?? []}
}

export const useProfile = () => {
    const {currentUser} = useUser()
    const {isLoading, data: profile} = useQuery([profileKey, currentUser], () => fetchUserProfile(currentUser))
    return {isProfileLoading: isLoading, profile}
}
