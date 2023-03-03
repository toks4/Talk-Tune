import { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  // Add some states to control your inputs
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await axios.post('http://localhost:5005/auth/login', {
        username,
        password,
      })
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
  <div>
    <form>
    <input 
           type="text" 
           value={username
           }
           onChange={event => setUsername(event.target.value)}
           onSubmit={handleSubmit} />
    <input 
           type="text" 
           value={password}
           onChange={event => setPassword(event.target.value)}
           onSubmit={handleSubmit} />
    <button className='logInBtn' type='submit'>Log In</button>
    </form>
  </div>

  )
}


  export default LoginPage
