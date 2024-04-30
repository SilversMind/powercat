import {create} from "zustand"
import {fetchActiveUsers} from "./Profile/services/profileServices"
import {settings} from "./setting";

export type UserState = {
    currentUser: string | undefined
    updateCurrentUser: (newCurrentUser: string) => void
}

export const useUser = create<UserState>((set) => ({
    currentUser: "Lolo",
    updateCurrentUser: (newCurrentUser: string) => set({currentUser: newCurrentUser})
}))
fetchActiveUsers(settings.defaultIPAddress).then(users => useUser.setState({currentUser: users[0]}))