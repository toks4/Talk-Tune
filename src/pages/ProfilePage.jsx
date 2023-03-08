import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { SessionContext } from '../contexts/SessionContext'
import '../App.css'


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
    </div>
    <div>
    <Link to='/profile/Viewprofile'>
      <button className='ViewProfileBtn' type='submit'>View Profile</button>
  </Link>
    </div>
  
    </div>
    </div>
    
   

    <Link to='/createPodcast'>
        <button className='podcastsBtn' type='submit'> Podcasts </button>
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