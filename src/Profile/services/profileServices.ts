export const fetchActiveUsers = async (ipAddress: string): Promise<string[]> => {
    const url = new URL(`http://${ipAddress}/profile/active-users`)
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.error("Error fetching active users:", error);
        return []
    }
}