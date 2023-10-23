export const fetchProgramData = async (program_id: number) => {
    try {
        const response = await fetch("http://192.168.1.16:8000/program/" + program_id);
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error fetching data:", error);
    }

};