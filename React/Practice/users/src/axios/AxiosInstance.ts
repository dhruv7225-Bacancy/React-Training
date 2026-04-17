import axios from "axios";

export const api = axios.create({
    baseURL: "https://dummyjson.com/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
})


api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("authToken")}`
    return config
},
    (err) => {
        return Promise.reject(err)
    }
)

api.interceptors.response.use((response) => {
    return response
}, (err) => {
    if (err.response) {
        switch (err.response.status) {
            case 400:
                console.log("not found");
                break;
            case 401:
                console.log("unauthorizeed");
                break;
            default:
                console.log(`error: ${err.response.status}`);
        }
    }
    else if (err.request) {
        console.log("network err");
    }
    else {
        console.log(err);

    }
    return Promise.reject(err)
})