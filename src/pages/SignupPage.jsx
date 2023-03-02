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
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await axios.post('http://localhost:5173/auth/signup', {
        firstname,
        lastname,
        birthday,
        city,
        country,
        email,
        password,
      })
      console.log(response.data)

      if (response.status === 201) {
        navigate('/login')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
   <div>
    <form>
        <label>First Name: </label>
        <input 
           type="text" 
           value={firstname}
           onChange={event => setFirstName(event.target.value)}
           onSubmit={handleSubmit} />
        <label>Last Name: </label>
           <input 
           type="text" 
           value={lastname}
           onChange={event => setLastName(event.target.value)}
           onSubmit={handleSubmit} />
            <label>Birthday: </label>
           <input 
           type="number" 
           value={birthday}
           onChange={event => setBirthday(event.target.value)}
           onSubmit={handleSubmit} />
            <label>Country: </label>
           <input 
           type="text" 
           value={country}
           onChange={event => setCountry(event.target.value)}
           onSubmit={handleSubmit} />
            <label>City: </label>
           <input 
           type="text" 
           value={city}
           onChange={event => setCity(event.target.value)}
           onSubmit={handleSubmit} />
            <label>Email: </label>
           <input 
           type="text" 
           value={email}
           onChange={event => setEmail(event.target.value)}
           onSubmit={handleSubmit} />
            <label>Password: </label>
           <input 
           type="text" 
           value={password}
           onChange={event => setPassword(event.target.value)}
           onSubmit={handleSubmit} />
    <button className='signUpBtn' type='submit'>Sign Up</button>
    </form>
    </div>
  )
}

export default SignupPage
