import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar.jsx'
import NavbarBlow from '../Components/NavbarBlow'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, loginUser } from '../config/firebase/FirebaseMethod'

const Home = () => {
  const navigate = useNavigate()
  let [CheckUser, setCheckUser] = useState(null)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
      
        console.log(user);

        setCheckUser(true)

        return
      }
      setCheckUser(false)

    })
  }, [])
  return (
    <>

      <Navbar
      
        Login={!CheckUser ? 'Login' : ''}
      />

      <NavbarBlow PageName='Good Morning Readers!' />
      <h1>home</h1>
    </>
  )
}

export default Home
