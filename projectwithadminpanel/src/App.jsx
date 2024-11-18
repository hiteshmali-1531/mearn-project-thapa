
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './component/Navbar';
import Service from './pages/Service';
import Logout from './pages/Logout';
import Admin from './pages/Admin';
import AdminLayouts from './component/layouts/AdminLayouts';
import AdminUsers from './pages/AdminUsers';
import AdminContacts from './pages/AdminContacts';
import UpdateUser from './pages/UpdateUser';
// import { useAuth } from './store/auth';
// import { useEffect } from 'react';
// import { useEffect } from 'react';
// import { useAuth } from './store/auth';

function App() {
  let random  = Math.random();
  // let { storetokenInLS,LogoutUser} = useAuth();
  
  // useEffect(() =>{
  //   console.log(random);
  //   random = Math.random()* 10;
    
  // },[storetokenInLS, LogoutUser])

  return (
    <>
      <BrowserRouter>
      <Navbar key={random} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route  path='/about' element={<About />} />
          <Route  path='/service' element={<Service />} />
          <Route  path='/contact' element={<Contact />} />
          <Route  path='/register' element={<Register />} />
          <Route  path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/admine' element={<Admin />} />
          <Route path='/admin' element={<AdminLayouts />}>
            <Route path='users' element={<AdminUsers />} / >
            <Route path='contacts' element={<AdminContacts />} / >
            <Route path='users/:id/edit' element={<UpdateUser />} />
          </Route>
        </Routes>
    
      </BrowserRouter>
    </>
  )
}

export default App
