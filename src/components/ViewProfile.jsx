import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'antd' ;
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ViewProfile() {

    const [urProfile, setUrProfile] = useState('')
    const nav = useNavigate();
    const { profileId } = useParams();

    useEffect(() => {
        async function fetchProfile () {
        const response =  await axios.get(`${import.meta.env.VITE_BASE_API_URL}/profile/profile`)


       setUrProfile(response.data)
      }
      fetchProfile()
    }, [])

    const handleDelete = async (id) => {
        await axios.delete(`${import.meta.env.VITE_BASE_API_URL}/profile/${id}`);
        setUrProfile(urProfile.filter(profile => profile._id !== id));     
      };


  return (
    <div className='urProfile'>
  <h2> Your Profile </h2>
    {urProfile && urProfile.map((yourProfile) => {
        return (
       <Card key={yourProfile._id} style={{ width: 350, height: 600, margin: 15 }}>
       <h1>{yourProfile.podcastname}</h1>
       <h1>{yourProfile.lastname}</h1>
       <h1>{yourProfile.birthday}</h1>
       <h1>{yourProfile.city}</h1>
       <h1>{yourProfile.country}</h1>
       <h1>{yourProfile.email}</h1>
       <h1>{yourProfile.username}</h1>
       <h1>{yourProfile.password}</h1>

       <Link to={`/updateProfile/${yourProfile._id}`}><button type='button'> Update Profile </button></Link>
       <button type='button' onClick={() => handleDelete(yourProfile._id)}> Delete Profile </button>
        </Card>
        
        )}
      )}
      <button type="button" onClick={() => nav('/profile')}>Back</button>
   </div>
  )
}
export default ViewProfile