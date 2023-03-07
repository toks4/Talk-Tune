import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
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


  const profileUpdate = {firstname, lastname, birthday, city, country, email, username, password}
   const response =  axios.put('http://localhost:5005/profile', profileUpdate)
   setPodcastName('')
        setFirstName('')
        setLastName('')
        setBirthday('')
        setCity('')
        setCountry('')
        setEmail('')
        setUsername('')
        setPassword('')


return (
  <div>
   <form onSubmit={handleSubmit} >
       <label>First Name: 
       <input 
          type="text" 
          value={firstname}
          onChange={event => setFirstName(event.target.value)}
          /> </label>
       <label>Last Name: 
          <input 
          type="text" 
          value={lastname}
          onChange={event => setLastName(event.target.value)}
          /> </label>
           <label>Birthday: 
          <input 
          type="number" 
          value={birthday}
          onChange={event => setBirthday(event.target.value)}
           /> </label>
           <label>Country: 
          <input 
          type="text" 
          value={country}
          onChange={event => setCountry(event.target.value)}
          /> </label>
           <label>City:
          <input 
          type="text" 
          value={city}
          onChange={event => setCity(event.target.value)}
          />  </label>
           <label>Email: 
          <input 
          type="text" 
          value={email}
          onChange={event => setEmail(event.target.value)}
          /> </label>
          <label>Username: 
          <input 
          type="text" 
          value={username}
          onChange={event => setUsername(event.target.value)}
          /> </label>
           <label>Password: 
          <input 
          type="text" 
          value={password}
          onChange={event => setPassword(event.target.value)}
          /> </label>
   <button className='updateBtn' type='submit'> Update Profile </button>
   </form>
  </div>
)
}

export default UpdateProfile