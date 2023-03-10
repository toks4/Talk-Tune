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
        const response =  await axios.get(`http://localhost:5005/profile/profile`)


       setUrProfile(response.data)
      }
      fetchProfile()
    }, [])

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5005/profile/${id}`);
        setUrProfile(urProfile.filter(profile => profile._id !== id));     
      };


  return (
    <div className='urProfile'>
  <h2 className='yourProfileTitle'> Your Profile </h2>
    {urProfile && urProfile.map((yourProfile) => {
        return (
       <Card key={yourProfile._id} style={{ width: 550, height: 500, margin: 15 }} className='allPodcastsForm'>
       <h1>First Name: {yourProfile.firstname}</h1>
       <h1>Last Name: {yourProfile.lastname}</h1>
       <h1>Birthday: {yourProfile.birthday}</h1>
       <h1>City: {yourProfile.city}</h1>
       <h1>Country: {yourProfile.country}</h1>
       <h1>Email: {yourProfile.email}</h1>
       <h1>Username: {yourProfile.username}</h1>
       <h1>{yourProfile.password}</h1>

       <Link to={`/updateProfile/${yourProfile._id}`}><button type='button' className='updateProfileBtnView'> Update Profile </button></Link>
       <button type='button' onClick={() => handleDelete(yourProfile._id)} className='deleteProfileBtnView'> Delete Profile </button>
        </Card>
        
        )}
      )}
      <button type="button" onClick={() => nav('/profile')} className='backBtnProfile'>Back</button>
   </div>
  )
}
export default ViewProfile