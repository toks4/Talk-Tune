import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';



function ProfilePage() {
    const [user, setUser] = useState('')
    const [userId] = useParams('')



    const getUser = async () => {
    const response = await axios(`http://localhost:5005/auth/${userId}`,{
        
    })
    const data = await response.json();
    setUser(data)

} 



    
    useEffect(()=>{
       getUser()
    },[]);


  return (
    <div>
    <h1>ProfilePage</h1>
    <Link to='/createPodcast'>
        <button className='podcastsBtn' type='submit'> Podcasts </button>
        </Link>
    
    </div>
  )
}

export default ProfilePage