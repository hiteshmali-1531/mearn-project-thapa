import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { FaUser , FaMessage } from "react-icons/fa6";
import { FaRegListAlt,FaHome  } from "react-icons/fa";
import { useAuth } from "../../store/auth";
import { useEffect } from "react";


const AdminLayouts = () => {
  const navigate = useNavigate();
  // console.log(userData.msg)
  const {userData} = useAuth();
  useEffect(()=>{
    if( (userData)){
    // console.log(userData.msg.isAdmin)

      if(!userData.msg.isAdmin){
        navigate("/");
      }
    }
  },[userData]);
  return (
    <header>
        <div className="container">
            <nav>
                <ul>
                    <NavLink className="text-white text-2xl flex gap-1 items-center" to="/admin"><FaHome /> Home</NavLink>
                    <NavLink className="text-white text-2xl flex gap-1 items-center" to="/admin/users"><FaUser />Users</NavLink>
                    <NavLink className="text-white text-2xl flex gap-1 items-center" to="/admin/contacts"><FaMessage /> Contacts </NavLink>
                    <NavLink className="text-white text-2xl flex gap-1 items-center" to="/admin/service"><FaRegListAlt />  Services </NavLink>
                    
                </ul>
            </nav>
        </div>
        <Outlet />
    </header>
  )
}

export default AdminLayouts
