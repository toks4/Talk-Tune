import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { SessionContext } from '../contexts/SessionContext';

function UpdateProfile(){
  // Add some states to control your inputs
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { profileId } = useParams();
  const { user } = useContext(SessionContext);
  const nav = useNavigate();

  useEffect(() => {
  const fetchData = async () => {
   const response =  axios.get(`http://localhost:5005/profile/${profileId}`);
   console.log(response.data)
   const {firstname, lastname, birthday, city, country, email, username, password} = response.data;
        setFirstName(firstname);
        setLastName(lastname);
        setBirthday(birthday);
        setCity(city);
        setCountry(country);
        setEmail(email);
        setUsername(username);
        setPassword(password);
      };
      fetchData();
    }, [profileId]);

    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const updatedProfile = {
        firstname,
        lastname,
        birthday,
        city,
        country,
        email,
        username,
        password,
      };
  
      const response = await axios.put(`http://localhost:5005/profile/${profileId}`, updatedProfile);
      console.log(response.data)
  
      nav ('/viewProfile')
    };


retur
  <div>
  <h4>Update Profile</h4>
   <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit} >
       <label>First Name: 
       <input 
          type="text" 
          value={firstname}
          onChange={(event) => setFirstName(event.target.value)}
          /> </label>
       <label>Last Name: 
          <input 
          type="text" 
          value={lastname}
          onChange={(event) => setLastName(event.target.value)}
          /> </label>
           <label>Birthday: 
          <input 
          type="number" 
          value={birthday}
          onChange={(event) => setBirthday(event.target.value)}
           /> </label>
           <label>Country: 
          <input 
          type="text" 
          value={country}
          onChange={(event) => setCountry(event.target.value)}
          /> </label>
           <label>City:
          <input 
          type="text" 
          value={city}
          onChange={(event) => setCity(event.target.value)}
          />  </label>
           <label>Email: 
          <input 
          type="text" 
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          /> </label>
          <label>Username: 
          <input 
          type="text" 
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          /> </label>
           <label>Password: 
          <input 
          type="text" 
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          />
          </label>
   <button className='updateProfileBtn' type='submit'> Update Profile </button>
   <button type="button" onClick={() => nav('/profile')}>Back</button>
   </form>
  </div>
 );
}

export default UpdateProfile