export const updateCurrentTraining = async (profileName: string) => {
    const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name: profileName}),
    };
    const response = await fetch("http://192.168.1.16:8000/training/finish", requestOptions);
    await response.json()


}