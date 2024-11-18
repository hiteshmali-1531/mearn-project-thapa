import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
// import { useAuth } from "../store/auth";


const AdminUsers = () => {
  const [Users, setUsers] = useState([]);
  const getAllUsersData = async () => {
    let token = localStorage.getItem('token');
    // token = useAuth();

    const response = await fetch(`http://localhost:3000/api/admin/users`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if(response.ok){

      const users = await response.json();
      
      setUsers(users);
    }
    // console.log(users);
  }
  useEffect(() => {
    getAllUsersData();
  }, []);
  const deleteUser = async(id)=>{
    let token = localStorage.getItem('token');
    // console.log(e.target);
    // console.log(id);
    try {
      
      const response = await fetch(`http://localhost:3000/api/admin/users/delete/${id}`,{
          method: 'DELETE',
          headers:{
            Authorization: `Bearer ${token}`
          }
      });
      if(response.ok){

        const result = await response.json();
  
        // console.log(result);
        getAllUsersData();
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="text-white">
      

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
         
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-center whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-xl bg-gray-100 rounded-tl rounded-bl">Home</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-xl bg-gray-100">Email</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-xl bg-gray-100">Phone</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-xl bg-gray-100">Update</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-xl bg-gray-100 rounded-tr rounded-br" >Delete</th>
                </tr>
              </thead>
              <tbody>
              {Users.length != 0 && Users.map((item) => {
        return <tr className="text-white" key={item._id.toString()}>
                  <td className="border-t-2 border-gray-200 px-4 py-3">{item.username}</td>
                  <td className="border-t-2 border-gray-200 px-4 py-3">{item.email}</td>
                  <td className="border-t-2 border-gray-200 px-4 py-3">{item.phone}</td>
                  <td className="border-t-2 border-gray-200 py-3 text-lg text-white"><Link to={`/admin/users/${item._id}/edit`} className="px-8 py-2 bg-green-500 rounded-full" >Edit</Link></td>
                  <td className="border-t-2 py-3 border-gray-200 w-10 text-center">
                  <button className="px-5 py-2 bg-indigo-700 rounded-md text-white" onClick={()=>{deleteUser(item._id)}}>Delete</button>
                    
                  </td>
                </tr>
      })}
               
                
               
               
              </tbody>
            </table>
          </div>
        
        </div>
      </section>

    </div>
  )
}

export default AdminUsers
