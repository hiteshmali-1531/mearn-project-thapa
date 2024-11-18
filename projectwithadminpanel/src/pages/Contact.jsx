import { useEffect, useState } from "react"
import { useAuth } from "../store/auth";


export default function Contact() {
  let [user, setUser] = useState({
    username: "",
    email: "",
    message: ""
  })
  const onChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user, [name] : value
    })
  }

  const {userData,LogoutUser} = useAuth();
  console.log(userData);

  useEffect(()=>{
    setTimeout(()=>{
      console.log(userData);

      if(userData){
        setUser({
          username : userData.msg.username,
          email : userData.msg.email,
          message : ""
        })
      }else{
        setUser({
          username: "",
          email: "",
          message: ""
      })
    }
    },200)
  }, [userData, LogoutUser])

  const onSubmit = async(e) =>{
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/api/form/contact`, {
      method : 'POST',
      headers:{
        'Content-Type': 'application/json'
        
      },
      body: JSON.stringify(user)
    })
    if(response.ok){
      let data  = await response.json();
      console.log(data);
      setUser({
        ...user,
        message : ""
      })
    }

  }
  return (<>

    <h1 className="text-white text-9xl text-center">Contact </h1>
    <div className="container">
      <div className="contact-image" >
        <img src="/support.png " alt="No Image" width={500} height={500} />
      </div>
      <div className="login-form flex-wrap  p-4 ">
    
        <form onSubmit={onSubmit}>

          <div className="my-4 shadow ">

            <label htmlFor="email" className="text-white block text-2xl font-bold ">Email :</label>
            <input type="email" className="w-[40vw] bg-gray-600 text-xl text-white focus:outline-0 border-none p-4 rounded m-3" name="email" id="email" onChange={onChange} placeholder="Enter your Email" value={user.email} autoComplete="off" />
          </div>

          <div className="my-4 shadow ">

            <label className="block text-2xl font-bold text-white " htmlFor="password">Username :</label>
            <input type="text" className="w-[40vw] text-xl bg-gray-600 text-white focus:outline-0 border-none p-4 rounded m-3" name="password" id="password" onChange={onChange} value={user.username} placeholder="Enter your password" autoComplete="off" />
          </div>
          <div className="message">
            <label className="block text-2xl font-bold text-white my-2" htmlFor="password">Message :</label>
            <textarea name="message" className="  w-[40vw] text-xl bg-gray-600 text-white focus:outline-0 border-none p-4 rounded m-3" onChange={onChange} id="message" value={user.message} cols="30" rows="10"></textarea>
          </div>
          <div>
            <button type="submit" className="btn btn-submit  bg-indigo-800 py-3 px-6 text-2xl rounded-md my-3 hover:bg-indigo-900  text-white">
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
    <div className="map w-[90vw] m-auto h-[80vh]">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.8491130222196!2d72.63867057477685!3d23.24857715785752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b8b621b89cb%3A0xbdfcfa66f3dbc3f6!2sSahakar%20Colony%2C%20Sector%2025%2C%20Gandhinagar%2C%20Gujarat%20382027!5e0!3m2!1sen!2sin!4v1704430236591!5m2!1sen!2sin" style={{border:'0', width:'100%',height: '80vh'}}  loading="lazy" ></iframe>
    </div>
  </>
  )
}
