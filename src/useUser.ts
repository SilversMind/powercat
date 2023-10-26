import {create} from "zustand"
import {fetchActiveUsers} from "./Profile/services/profileServices"

export type UserState = {
    currentUser: string | undefined
    updateCurrentUser: (newCurrentUser: string) => void
}

export const useUser = create<UserState>((set) => ({
    currentUser: undefined,
    updateCurrentUser: (newCurrentUser: string) => set({currentUser: newCurrentUser})
}))

fetchActiveUsers().then(users => useUser.setState({currentUser: users[0]}))