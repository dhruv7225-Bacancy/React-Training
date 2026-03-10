import { createContext, useContext, useState } from "react";


type ContextType={
    user:User,
    setUser:React.Dispatch<React.SetStateAction<User | null>>,
    isLoggedIn:boolean,
    setIsLoggedIn:React.Dispatch<React.SetStateAction<boolean>>,
    login:(role:"admin"|"user")=>void,
    logout:()=>void
}
export const AuthContext=createContext<ContextType|null>(null)

type User={
    name:string,
    age:number,
    role:"admin"|"user"
}

export function useAuth(){
    return useContext(AuthContext);
}
export function AuthProvider(props){
    const [user,setUser]=useState<User|null>(null);
    const [isLoggedIn,setIsLoggedIn]=useState<boolean>(false);
    function login(role:"admin"|"user"){
        setUser({
                name:"dhruv",
                age:21,
                role:role
            })
        setIsLoggedIn(true)
    }
    function logout(){
        setUser(null)
        setIsLoggedIn(false)
    }

    const value={
        user,setUser,isLoggedIn,setIsLoggedIn,login,logout
    }
    return (
       <AuthContext.Provider value={value}>
        {props.children}
       </AuthContext.Provider>
    )
}
