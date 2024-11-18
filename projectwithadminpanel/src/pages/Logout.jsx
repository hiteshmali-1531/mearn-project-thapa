import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";


function Logout() {
    const Navigate = useNavigate();

    const {LogoutUser} = useAuth();
  
    useEffect(() =>{
        LogoutUser();
        Navigate("/login");
    }, [LogoutUser]);

  return (
    <></>
  )
}

export default Logout
