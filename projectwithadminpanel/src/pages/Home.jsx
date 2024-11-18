import { useEffect } from "react";
import { useAuth } from "../store/auth"


function Home() {
  let {userData,isLoggedIn} = useAuth();
  useEffect(() =>{
    if(userData){
      userData = userData.msg
    }
    
  },[])
  // console.log(userData);
  return (
    <>
      <main>
        <section className="section-hero text-white">
          <div className="container flex flex-wrap gap-2 content-center w-[80vw]">
            <div className="hero-content w-[80vw] md:w-[43vw] xl:w-[40vw]">
             {isLoggedIn && <p className="text-2xl">Hii {userData ? userData.msg.username:""}</p>}
              <p className="text-2xl ">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <h1 className="text-7xl my-4">Lorem ipsum dolor sit.</h1>
              <p className="text-2xl"> voluptate repellat commodi animi repudiandae dolores qui, velit laboriosam ab rem ducimus porro sint laudantium alias labore veniam possimus sequi! Velit quibusdam corporis fuga.</p>
              <p className="my-4 text-2xl">quam impedit veritatis dignissimos ipsam illum voluptates expedita corporis. Ipsam dicta quas incidunt itaque</p>
              <p className="my-4 text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem consequatur laudantium, mollitia animi ,</p>
              <div className="btn flex gap-3 my-4">
                <a href="/contact" className="decoration-none bg-indigo-700 px-6 py-3 text-2xl rounded-md hover:bg-indigo-800"><button className="btn">connect now</button></a>
                <a href="/services" className="px-6 py-3 text-2xl rounded-md border border-white"><button className="btn capitalize">learn more</button></a>
              </div>
            </div>
              <div className="hero-image w-[80vw] md:w-[30vw] xl:w-[25vw]">
                <img src="/home.png" width="500" height="400" alt="No image" />
              </div>
          </div>
          <div className="section-analytics flex justify-center">
            <div className="contaner w-[80vw] grid grid-cols-4 gap-2">
                <div className="box1 bg-white py-5 text-black text-center text-xl">
                  <h2 className="text-4xl font-bold">50+</h2>
                  <p>registered companies</p>
                </div>
                <div className="box2 bg-white py-5 text-black text-center text-xl">
                  <h2 className="text-4xl font-bold">100,00+</h2>
                  <p>Happy Clients</p>
                </div>
                <div className="box3 bg-white py-5 text-black text-center text-xl">
                  <h2 className="text-4xl font-bold">500+</h2>
                  <p>Well known Developers</p>
                </div>
                <div className="box4 bg-white py-5 text-black text-center text-xl">
                  <h2 className="text-4xl font-bold">24/7</h2>
                  <p>Services</p>
                </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
