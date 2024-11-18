import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


function UpdateUser() {

    const [data, setData] = useState({
        username:"",
        email:"",
        phone:""
    });
    const params = useParams();

    const getUserData = async() =>{
        try {
            let id = params.id;
            let token = localStorage.getItem('token');
            const response = await fetch(`http://localhost:3000/api/admin/users/${id}`,{
                method:"GET",
                headers:{
                    Authorization : `Bearer ${token}`
                }
    
            })
            let result = await response.json();
            setData(result.user)
            console.log(result)
            
        } catch (error) {
            console.log(error.message)
        }
       
        
    }
    useEffect(() =>{
        getUserData();
    },[]);
    const onChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setData({
            ...data,
            [name]: value
        })

    }
    const onSubmit = async(e) =>{
        e.preventDefault();
        let id = params.id;
        let token = localStorage.getItem('token');
        try {
            const response = await fetch(`http://localhost:3000/api/admin/users/update/${id}`,{
                method: "PATCH",
                headers:{
                    "Content-Type": "application/json",
                    Authorization : `Bearer ${token}`
                },
                body: JSON.stringify(data)
            })
            let result = await response.json();
            console.log(result);
            getUserData();
        } catch (error) {
            console.log(error.message);
        }
    }
  return (
    <>

    <h1 className="text-white text-9xl "> Update User Data </h1>
    <div className="container">
      
      <div className="login-form flex-wrap  p-4 ">
    
        <form onSubmit={onSubmit}>

          <div className="my-4 shadow ">

            <label htmlFor="email" className="text-white block text-2xl font-bold ">Email :</label>
            <input type="email" className="w-[40vw] bg-gray-600 text-xl text-white focus:outline-0 border-none p-4 rounded m-3" name="email" id="email" onChange={onChange} placeholder="Enter your Email" value={data.email} autoComplete="off" />
          </div>

          <div className="my-4 shadow ">

            <label className="block text-2xl font-bold text-white " htmlFor="password">Username :</label>
            <input type="text" className="w-[40vw] text-xl bg-gray-600 text-white focus:outline-0 border-none p-4 rounded m-3" name="username" id="userName" onChange={onChange} value={data.username} placeholder="Enter your password" autoComplete="off" />
          </div>
          <div className="my-4 shadow ">

            <label className="block text-2xl font-bold text-white " htmlFor="password">Phone :</label>
            <input type="text" className="w-[40vw] text-xl bg-gray-600 text-white focus:outline-0 border-none p-4 rounded m-3" name="phone" id="phone" onChange={onChange} value={data.phone} placeholder="Enter your password" autoComplete="off" />
          </div>
          
          <div>
            <button type="submit" className="btn btn-submit  bg-indigo-800 py-3 px-6 text-2xl rounded-md my-3 hover:bg-indigo-900  text-white">
              Update
            </button>
          </div>

        </form>
      </div>
    </div>
    
  </>
  )
}

export default UpdateUser
