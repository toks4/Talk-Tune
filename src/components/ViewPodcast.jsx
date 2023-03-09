import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from 'antd' 
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

    function ViewPodcast() {

    const [allPodcasts, setAllPodcasts] = useState('')
    const nav = useNavigate();

    useEffect(() => {
        async function fetchPodcast () {
        const response =  await axios.get(`http://localhost:5005/pod/podcast`)


       setAllPodcasts(response.data)
      }
      fetchPodcast()
    }, [])

  return (
  <div className='allPodcasts'>
  <h2> Your Podcasts </h2>
    {allPodcasts && allPodcasts.map((onePodcast) => {
        return (
       <Card key={onePodcast._id}style={{ width: 350, height: 600, margin: 15 }}>
       <h1>{onePodcast.podcastname}</h1>
       <h1>{onePodcast.podcastdescription}</h1>
       <h1>{onePodcast.podcastcategory}</h1>
       <h1>{onePodcast.podcastaudio}</h1>
       <h1>{onePodcast.podcastimage}</h1>
       <h1>{onePodcast.episodename}</h1>

       <Link to={`/updatePodcast ${onePodcast._id}`}><button type='button'>Update Podcast</button></Link>
        <button type='button'> Delete Podcast</button>
        </Card>
        
        )}
      )}
   </div>
  )
}

export default ViewPodcast