import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Divider } from 'antd';
import { SessionContext } from '../contexts/SessionContext';

function ProfilePage() {

   /* const getUser = async () => {
    const response = await axios.get(`http://localhost:5005/profile/${userId}`,{
    
    })
    const data = await response.json();
    setUser(data)
} 
    useEffect(()=>{
       getUser()
    },[]);
*/

const {user} = useContext(SessionContext)
if (!user) {
   return <p>Loading</p>
}

  return (
    <div>
    <h1>Hi, {user.firstname}!</h1>
    <Link to='/profile/updateprofile'>
        <button className='updateProfileBtn' type='submit'> Update Profile </button>
    </Link>
    <Link to='/profile/deleteprofile'>
        <button className='deleteProfileBtn' type='submit'> Delete Profile </button>
    </Link>
<Divider> </Divider>
    <Link to='/createPodcast'>
        <button className='podcastsBtn' type='submit'> Podcasts </button>
    </Link>
  
    
    </div>
  )
}

export default ProfilePage