import { useState } from "react"
import { toast} from "react-toastify"
import { useNavigate } from "react-router-dom";


export default function Register() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    username : "",
    email: "",
    phone:"",
    password:""
  });
  let nameValue;
  let value;
  const onChange = (e) =>{
    console.log(e.target.name);
    nameValue = e.target.name;
    value = e.target.value
    setUser({
      ...user, [nameValue]: value
    })
  }

 

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      
      let res = await fetch(`http://localhost:3000/api/auth/register`, {
        method: 'POST',
        headers:{
          "Content-Type" : "application/json",
        },
        body: JSON.stringify(user)
      })
      

        res = await res.json();
        if(res.token){
          toast.success(`${res.msg}`, {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            setTimeout(() =>{

              navigate("/login")
            },1000)
        }else{
          toast.error(`${res.msg}`, {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
        console.log(res);
      
       
        setUser({
          username : "",
          email: "",
          phone:"",
          password:""
        })
      

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section>
      <main>
        <div className="section-registration ">
          <div className="container flex justify-around">
            <div className="registration-image" >
              <img style={{   }} src="/register.png " alt="No Image" width={500} height={500} />
            </div>
            <div className="registration-form flex-wrap shadow p-4 shadow-white">
              <h1 className="main-heading mb-3 capitalize" >registration form</h1>
              <form onSubmit={handleSubmit}>
                <div className="my-4 shadow ">

                  <label htmlFor="username " className="block text-2xl font-bold ">Username</label>
                  <input type="text" className="w-[40vw] text-xl bg-gray-500 text-white focus:outline-0 border-none p-4 rounded m-3"  name="username" id="username" value={user.username} onChange={onChange} placeholder="Enter your Name" autoComplete="off" />
                </div>
                <div className="my-4 shadow ">

                  <label htmlFor="email" className="block text-2xl font-bold ">Email</label>
                  <input type="email" className="w-[40vw] bg-gray-500 text-xl text-white focus:outline-0 border-none p-4 rounded m-3" name="email" id="email" onChange={onChange} placeholder="Enter your Email" value={user.email} autoComplete="off" />
                </div>
                <div className="my-4 shadow ">

                  <label htmlFor="email" className="block text-2xl font-bold ">phone</label>
                  <input type="number" className="w-[40vw] text-xl bg-gray-500 text-white focus:outline-0 border-none p-4 rounded m-3" name="phone" id="phone" onChange={onChange} placeholder="Enter your phone" value={user.phone} autoComplete="off" />
                </div>
                <div  className="my-4 shadow ">

                  <label className="block text-2xl font-bold " htmlFor="password">password</label>
                  <input type="password" className="w-[40vw] text-xl bg-gray-500 text-white focus:outline-0 border-none p-4 rounded m-3" name="password" id="password" onChange={onChange} value={user.password} placeholder="Enter your password" autoComplete="off" />
                </div>
                <div>
                  <button type="submit" className="btn btn-submit bg-blue-800 py-3 px-6 text-xl rounded-sm hover:bg-blue-900 ">
                    Register Now
                  </button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}
