export const fetchTraining = async (username: string | undefined) => {
    if (!username) return
    const url = new URL("http://192.168.1.16:8000/training/")
    url.search = new URLSearchParams({"username": username}).toString()
    const response = await fetch(url)
    const data = await response.json()
    return data
}