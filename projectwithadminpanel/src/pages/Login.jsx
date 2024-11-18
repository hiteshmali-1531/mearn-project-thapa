import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../store/auth";
import { toast} from "react-toastify"



export default function Login() {
  const { storetokenInLS } = useAuth();

  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  let nameValue;
  let value;
  const onChange = (e) => {
    console.log(e.target.name);
    nameValue = e.target.name;
    value = e.target.value
    setUser({
      ...user, [nameValue]: value
    })
  }

  // const storetokenInLS = (token) =>{
  //   localStorage.setItem('token', token);
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      let res = await fetch(`http://localhost:3000/api/auth/login`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
      })

      // if(res.ok){
      // }
      res = await res.json();
      if (res.token) {
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

        storetokenInLS(res.token);
        setTimeout(() =>{

          navigate("/")
        },1000)


      } else {
        toast.error(`${res.msg}`, {
          position: "top-right",
          autoClose: 1000,
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
        email: "",
        password: ""
      })


    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section>
          
      <main>
        <div className="section-login ">
          {/* Same as */}
         
          <div className="container flex justify-around">
            <div className="login-image" >
              <img style={{}} src="/login.png " alt="No Image" width={500} height={500} />
            </div>
            <div className="login-form flex-wrap shadow p-4 shadow-white">
              <h1 className="main-heading mb-3 capitalize text-8xl text-white" >Login form</h1>
              <form onSubmit={handleSubmit}>

                <div className="my-4 shadow ">

                  <label htmlFor="email" className="text-white block text-2xl font-bold ">Email :</label>
                  <input type="email" className="w-[40vw] bg-gray-500 text-xl text-white focus:outline-0 border-none p-4 rounded m-3" name="email" id="email" onChange={onChange} placeholder="Enter your Email" value={user.email} />
                </div>

                <div className="my-4 shadow ">

                  <label className="block text-2xl font-bold text-white " htmlFor="password">password :</label>
                  <input type="password" className="w-[40vw] text-xl bg-gray-500 text-white focus:outline-0 border-none p-4 rounded m-3" name="password" id="password" onChange={onChange} value={user.password} placeholder="Enter your password" />
                </div>
                <div>
                  <button type="submit" className="btn btn-submit  bg-blue-800 py-3 px-6 text-xl rounded-sm hover:bg-blue-900 text-white">
                    Login
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
