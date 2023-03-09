import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Divider } from 'antd';
import { useContext } from 'react'
import { SessionContext } from '../contexts/SessionContext';


function ProfilePage() {
    const navigate = useNavigate()

   /* const getUser = async () => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/profile/${userId}`,{
    
    })
    const data = await response.json();
    setUser(data)
} 
    useEffect(()=>{
       getUser()
    },[]);
*/

const {user} = useContext(SessionContext)
useEffect(()=>{
    if (!user) {
    navigate('/login')
    }
 },[]);


  return (

    <div className=''>


   <div className='user-prof'>
       <h1>Hi, {user.firstname}!</h1>

    </div>
    <div>
    <Link to='/profile/updateprofile'>
        <button className='updateProfileBtn' type='submit'> Update Profile </button>
    </Link>
    <Link to='/profile/viewprofile'>
        <button className='viewProfileBtn' type='submit'> View Profile </button>
    </Link>
<Divider> 
<Link to='/favouritePodcast'>
        <button className='favPodcastsBtn' type='submit'> Favourite Podcast </button>
    </Link>
    <Link to='/createPodcast'>
        <button className='podcastsBtn' type='submit'> Create Podcast </button>
    </Link>
    <Link to='/viewPodcast'>
        <button className='viewPodcastsBtn' type='submit'> View Podcast </button>
    </Link>
    </Divider>
    </div>
   
   
   
    
    </div>
  )
}

export default ProfilePage