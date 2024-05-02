import {settings} from "../../setting";

export const fetchActiveUsers = async (): Promise<string[]> => {
    try {
        const response = await fetch(`${settings.defaultIPAddress}/profile/active-users`)
        return await response.json()
    } catch (error) {
        console.error("Error fetching active users:", error);
        return []
    }
}