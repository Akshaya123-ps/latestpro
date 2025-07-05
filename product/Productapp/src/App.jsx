import React , { useState} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Add from './components/Add'
import View from './components/View'
import {Route, Routes} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Admin from './components/Admin'
import User from './components/User'
import AdminNavbar from './components/AdminNavbar'
import UserNavbar from './components/UserNavbar'
import AddtoCart from './components/AddtoCart'


function App() {
  const [count, setCount] = useState(0)
const user = JSON.parse(localStorage.getItem('user'));
  return (
    <>
    {
      user ? (
        user.userType ==="admin" ? <AdminNavbar/>:<UserNavbar/>
      ) : (
        <Navbar/>
      )
    }
    
      
      <Routes>
        
        <Route path='/a' element={<Add/>}/>
        <Route path='/v' element={<View/>}/>
        <Route path='/l' element={<Login/>}/>
        <Route path='/s' element={<Signup/>}/>
         <Route path='/admin' element={<Admin/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='/addto' element={<AddtoCart/>}/>
      </Routes>
    
      
      
    </>
  )
}

export default App
