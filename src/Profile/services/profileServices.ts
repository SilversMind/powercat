import {settings} from "../../setting";
import {Profile} from "../types"

export const fetchActiveUsers = async (): Promise<string[]> => {
    try {
        const response = await fetch(`${settings.defaultIPAddress}/profile/active-users`)
        return await response.json()
    } catch (error) {
        console.error("Error fetching active users:", error);
        return []
    }
}

export const fetchUserProfile = async (username: string | undefined): Promise<Profile> => {
    const response = await fetch(`${settings.defaultIPAddress}/profile?username=${username}`)
    const result = await response.json()
    return {
        name: result.name,
        PR: result.PR,
        currentTraining: result.current_training,
        currentProgram: result.current_program,
        isActive: result.is_active

    }
}