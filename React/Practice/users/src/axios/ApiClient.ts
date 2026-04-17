
import { api } from "./AxiosInstance";


export async function login(name: string, pass: string) {
    const res = await api.post("/user/login", {
        username: name,
        password: pass
    })
    console.log(res.data);
    localStorage.setItem("authToken", res.data.accessToken)
}

export async function getPosts(){
    const res=await api.get("/posts")
    console.log(res);
    return res.data
}

export async function loadComments(id:number){
    const res=await api.get(`/posts/${id}/comments`)

    console.log(res);
    return res.data
    
}