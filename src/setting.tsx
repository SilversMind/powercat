let apiUrl = process.env.REACT_APP_API_URL;
if (!apiUrl) {
    console.log("No URL to the backend API defined")
    apiUrl = '192.168.1.16:8001'
}
export const settings = {
    defaultIPAddress: apiUrl // Default IP address
};

