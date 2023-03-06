import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  // Add some states to control your inputs
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post('http://localhost:5005/auth/login', {
        username, 
        password,
      })
      console.log(response.data)
      navigate('/profile/:userId')
      //if (response.status === 201) {
       

    //}
    }
    
    
    
    catch (error) {
      console.error(error)
    }
  }

  return (
  <div>
    <form  onSubmit={handleSubmit} >
    <input 
           type="text" 
           value={username
           }
           onChange={event => setUsername(event.target.value)}/>
          
    <input
    type="text" 
           value={password}
           onChange={event => setPassword(event.target.value)}/>


           
          
    <button className='logInBtn' type='submit'>Log In</button>
    </form>
  </div>

  )
}


  export default LoginPage
