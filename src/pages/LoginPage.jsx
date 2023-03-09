import { useState } from 'react';
import axios from 'axios';
import {SessionContext} from "../contexts/SessionContext";
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'


const LoginPage = () => {
  // Add some states to control your inputs
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { setToken, setUser } = useContext(SessionContext)
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.post(`http://localhost:5005/auth/login`, {
        username, 
        password,
      })
      console.log(response.data)

      setToken(response.data.authToken)
      setUser(response.data.user)

      if (response.status === 201) {
      navigate('/profile')
      } 
    } catch (error) {
      console.error(error)
    }
  }

  return (
  <div>
    <form onSubmit={handleSubmit}>
    <label>Username:
       <input 
           type="text" 
           value={username
           }
           onChange={event => setUsername(event.target.value)}
       />
    </label>
    <label>Password:
       <input 
           type="password" 
           value={password}
           onChange={event => setPassword(event.target.value)}
       />
    </label>
    <button className='logInBtn' type='submit'>Log In</button>
    </form>
  </div>

  )
}


  export default LoginPage
