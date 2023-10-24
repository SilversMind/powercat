import {create} from "zustand"

export const NAMES = ["Lolo", "Zouzou"]

export type UserState = {
    currentUser: string
    updateCurrentUser: (newCurrentUser: string) => void
}

export const useUser = create<UserState>((set) => ({
    currentUser: NAMES[0],
    updateCurrentUser: (newCurrentUser: string) => set({currentUser: newCurrentUser})
}))