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
   return <p>You need to Login First!</p>
}

  return (
    <div>
    <h1>Hi, {user.firstname}!</h1>
  
    <Link to='/viewProfile'>
        <button className='viewProfileBtn' type='submit'> View Profile Information </button>
    </Link>
<Divider> </Divider>
<Link to='/favouritePodcast'>
        <button className='favPodcastsBtn' type='submit'> Favourite Podcast </button>
    </Link>
    <Link to='/createPodcast'>
        <button className='podcastsBtn' type='submit'> Create Podcast </button>
    </Link>
    <Link to='/viewPodcast'>
        <button className='viewPodcastsBtn' type='submit'> View Your Podcast(s) </button>
    </Link>
    
    </div>
  )
}

export default ProfilePage