import { useEffect, useState } from "react"


const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);

  const getContactData = async()=>{
    let token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://localhost:3000/api/admin/contacts`,{
        method: 'GET',
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      if(response.ok){
        let result =await response.json();
        setContacts(result);
        console.log(result);
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  const deleteUser = async(id) =>{
    let token = localStorage.getItem('token');
      try {
        const response = await fetch(`http://localhost:3000/api/admin/contacts/delete/${id}`,{
          method: 'DELETE',
          headers:{
            Authorization : `Bearer ${token}`,
          }
        })
        if(response.ok){
          let result = await response.json();
          // console.log(result);
          getContactData();
        }
      } catch (error) {
        console.log(error.message)
      }
  }
  useEffect(()=>{
    getContactData();
  },[]);
  return (
    <div className="container md:w-[80vw]">

      <table className="table-auto w-full text-center whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-xl bg-gray-100 rounded-tl rounded-bl">Home</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-xl bg-gray-100">Email</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-xl bg-gray-100">Message</th>
            
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-xl bg-gray-100 rounded-tr rounded-br" >Delete</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((item) => {
            return <tr className="text-white" key={item._id.toString()}>
              <td className="border-t-2 border-gray-200 px-4 py-3">{item.username}</td>
              <td className="border-t-2 border-gray-200 px-4 py-3">{item.email}</td>
              <td className="border-t-2 border-gray-200 px-4 py-3">{item.message}</td>
            
              <td className="border-t-2 py-3 border-gray-200 w-10 text-center">
                <button className="px-5 py-2 bg-indigo-700 rounded-md text-white" onClick={() => { deleteUser(item._id) }}>Delete</button>

              </td>
            </tr>
          })}




        </tbody>
      </table>
    </div>
  )
}

export default AdminContacts
