import { createContext,useContext, useEffect, useState } from "react";
import {io} from "socket.io-client"
export const SocketContext = createContext();
import { AuthContext } from "./AuthContext";

export const SocketContextProvider = ({children})=>{
    const [socket,setSocket] =useState(null)
    const { currentUser } = useContext(AuthContext);

    useEffect(()=>{
       setSocket(io("https://real-estate-socketserver.onrender.com"))
    },[])

    useEffect(() => {
        currentUser && socket?.emit("newUser", currentUser.id);
    }, [currentUser, socket]);


    return (
        <SocketContext.Provider value={{socket}}>
            {children}
        </SocketContext.Provider>
    )
}
