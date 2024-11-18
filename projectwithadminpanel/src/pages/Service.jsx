import { useEffect, useState } from "react"



function Service() {
  const [service, setService] = useState();
  const getServices = async()=>{
    const res = await fetch(`http://localhost:3000/api/data/service`);
    if(res.status == 200){
      const data = await res.json();
      setService(data);
      console.log(service)

    }
  }
  useEffect(() =>{
    getServices();
  },[]);
  return (
    <section className=" text-white">
      <div className=" w-[90vw] m-auto">
        <h1 className="main-heading text-white text-8xl my-5 border-b-2">Services</h1>

      <div className="grid grid-cols-3 py-5 gap-3">
      {service&& service.map((item) =>{
          return  <div className="card border-2 border-white " key={item._id.toString()}>
          <div className="card-img">
            <img src="/design.png" className="mx-auto" width={200} alt="our servide info" />

          </div>
          <div className="card-detailss py-4 px-8">
          <div className="grid grid-cols-2 ">
            <p className="text-xl">{item.provider}</p>
            <p className="text-xl">{item.price}</p>
          </div>

            <h2 className="text-4xl font-semibold">{item.service}</h2>
            <p className="my-4 text-xl">{item.description}</p>
          </div>
        </div>
      })}
       
      </div>
      
      </div>

    </section>
  )
}

export default Service
