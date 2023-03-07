import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from 'antd' 

    function ViewPodcast() {

    const [allPodcasts, setAllPodcasts] = useState('')
   

    useEffect(() => {
        async function fetchPodcast () {
        const response =  await axios.get(`http://localhost:5005/pod/podcast`)


       setAllPodcasts(response.data)
      }
      fetchPodcast()
    }, [])

  return (
  <div>
    {allPodcasts && allPodcasts.map((onePodcast) => {
        return (
       <Card style={{ width: 230, height: 300, margin: 10 }}>
       <h1>{onePodcast.podcastname}</h1>
        <button>Update Podcast</button>
        <button>Delete Podcast</button>
        </Card>
        
        )
    }),
    }
   </div>
  )
}

export default ViewPodcast