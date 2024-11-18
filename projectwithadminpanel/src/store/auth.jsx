import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();



export const  AuthProvider = ({children}) =>{
    const [userData, setUser ] = useState("");
    const [token, setToken] = useState(localStorage.getItem("token"));
    const storetokenInLS = (token) =>{
        setToken(token);
        // location.reload();
        return localStorage.setItem('token', token);
  }

  let isLoggedIn = !!token;
    const LogoutUser = () =>{
        setToken("");
        return localStorage.removeItem("token");
    }
    const userAuthentication = async () =>{

        try {
            const response = await fetch(`http://localhost:3000/api/auth/user`,{
                method: "GET",
                headers: {
                    'Authorization' : `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }

            })
            if(response.ok){
                const data = await response.json();
                setUser(data);
                console.log(data);
            }else{
                setUser("")
            }
        } catch (error) {
            setUser("")
            console.log(error.message)
        }
    }

    // jwt AUTHENTICATION - TO GET THE CURRENTLY loggedIn user data 
    useEffect(() =>{
        setTimeout(() =>{

            userAuthentication();
        },100)
    },[token])

    return (<AuthContext.Provider value={{storetokenInLS, LogoutUser, isLoggedIn, userData}} >
        {children}
    </AuthContext.Provider>)
} 


export const useAuth = () =>{
    const AuthContextValue = useContext(AuthContext);
    if(!AuthContextValue){
        throw new Error("useAuth used outside of the Provider");
    }

    return AuthContextValue;
}

