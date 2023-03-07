import React, { useEffect } from 'react'
import { useState } from 'react';




function ProfilePage() {
    const [user, setUser] = useState('')
   



   /* const getUser = async () => {
    const response = await axios.get(`http://localhost:5005/auth/${userId}`,{
        
    })
    const data = await response.json();
    setUser(data)

} */



    
    useEffect(()=>{
       getUser()
    },[]);


  return (
    <div>
    <h1>ProfilePage</h1>
    <Link to='/profile/updateprofile'>
        <button className='updateProfileBtn' type='submit'> Update Profile </button>
    </Link>
    <Link to='/profile/deleteprofile'>
        <button className='deleteProfileBtn' type='submit'> Delete Profile </button>
    </Link>

    <Link to='/createPodcast'>
        <button className='podcastsBtn' type='submit'> Podcasts </button>
    </Link>
  
    
    </div>
  )
}

export default ProfilePage