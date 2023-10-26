export const fetchActiveUsers = async (): Promise<string[]> => {

    const url = new URL("http://192.168.1.16:8000/profile/active-users")
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.error("Error fetching active users:", error);
        return []
    }
}