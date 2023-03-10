import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  // Add some states to control your inputs
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await axios.post(`http://localhost:5005/auth/signup`, {
        firstname,
        lastname,
        birthday,
        city,
        country,
        email,
        username,
        password,
      })
      console.log(response.data)

      if (response.status === 201) {
        navigate('/profile')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
   
  <div className='formLayout'>
  <form onSubmit={handleSubmit} className='form'>
        <label>First Name
        <input 
           type="text" 
           value={firstname}
           onChange={event => setFirstName(event.target.value)}
           /> </label>
        <label>Last Name
           <input 
           type="text" 
           value={lastname}
           onChange={event => setLastName(event.target.value)}
           /> </label>
            <label>Birthday
           <input 
           type="number" 
           value={birthday}
           onChange={event => setBirthday(event.target.value)}
            /> </label>
            <label>Country
           <input 
           type="text" 
           value={country}
           onChange={event => setCountry(event.target.value)}
           /> </label>
            <label>City
           <input 
           type="text" 
           value={city}
           onChange={event => setCity(event.target.value)}
           />  </label>
            <label>Email
           <input 
           type="text" 
           value={email}
           onChange={event => setEmail(event.target.value)}
           /> </label>
           <label>Username
           <input 
           type="text" 
           value={username}
           onChange={event => setUsername(event.target.value)}
           /> </label>
            <label>Password
           <input 
           type="text" 
           value={password}
           onChange={event => setPassword(event.target.value)}
           /> </label>
    <button className='signUpBtn' type='submit'>Sign Up</button>
    </form>
   
    </div>
  )
}

export default SignupPage
