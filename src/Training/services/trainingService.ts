import {Training} from "../types";
import {useUser} from "../../useUser";

export const fetchTraining = async (username: string | undefined): Promise<Training | undefined> => {
    if (!username) return
    const response = await fetch(`http://192.168.1.16:8000/training?username=${username}`)
    return response.json()
}

export const updateCurrentTraining = async (): Promise<void> => {
    const currentUser = useUser.getState().currentUser
    if (!currentUser) return Promise.reject()

    const validatedSets = localStorage.getItem(currentUser)
    localStorage.removeItem(currentUser)

    const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name: currentUser, validatedSets: JSON.parse(validatedSets ?? "{}")}),
    }
    const response = await fetch("http://192.168.1.16:8000/training/finish", requestOptions)
    return response.json()
}