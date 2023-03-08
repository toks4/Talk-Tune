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
    <div className=''>


    <div className='user-prof'>
    <h1>Hi, {user.firstname}!</h1>

    <div>
    <div>
    <Link to='/profile/updateprofile'>
        <button className='updateProfileBtn' type='submit'> Update Profile </button>
    </Link>
    <Link to='/profile/viewprofile'>
        <button className='viewProfileBtn' type='submit'> View Profile </button>
    </Link>
<Divider> </Divider>
<Link to='/favouritePodcast'>
        <button className='favPodcastsBtn' type='submit'> Favourite Podcast </button>
    </Link>
    <Link to='/createPodcast'>
        <button className='podcastsBtn' type='submit'> Create Podcast </button>
    </Link>
    <Link to='/viewPodcast'>
        <button className='viewPodcastsBtn' type='submit'> View Podcast </button>
    </Link>
   
   
   
   <div className='container'>

   
    

   </div>
   <div>
    <button className='logoutBtn' type='submit'>Favourite podcastsBtn</button>
   </div>
   <div>
    <button className='logoutBtn' type='submit'>Create own Podcast</button>
   </div>
   <div>
    <button className='logoutBtn' type='submit'>Update own Podcast</button>
   </div>

   <div>
    <button className='logoutBtn' type='submit'>Logout</button>
   </div>
    




  
  
  
    
    </div>
  )
}

export default ProfilePage