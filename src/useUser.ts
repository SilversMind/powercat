import {create} from "zustand"

interface UserState {
    currentUser: string
    updateCurrentUser: (newCurrentUser: string) => void
}

export const useUser = create<UserState>((set) => ({
    currentUser: "Lolo",
    updateCurrentUser: (newCurrentUser: string) => set({currentUser: newCurrentUser})
}))
