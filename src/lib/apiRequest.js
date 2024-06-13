import axios from "axios";

const apiRequest=axios.create({
    baseURL: "https://real-estate-backend-ppul.onrender.com",
    withCredentials: true,
})

export default apiRequest;
