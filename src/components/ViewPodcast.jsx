import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'antd' ;
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { SessionContext } from '../contexts/SessionContext';

    function ViewPodcast() {

    const [allPodcasts, setAllPodcasts] = useState('')
    const nav = useNavigate();
    const { podcastId } = useParams();
    const [podReviews, setPodReviews] = useState([])

    useEffect(() => {
        async function fetchPodcast () {
        const response =  await axios.get(`${import.meta.env.VITE_BASE_API_URL}/pod/podcast`)
       setAllPodcasts(response.data)
      }
      fetchPodcast()
    }, [])


    useEffect(() => {
      async function fetchPodReviews () {
        try {
          const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/reviews/${podcastId}`)
        console.log(response.data);
        } catch (error){
          console.log(error);
        }
      }
    }, [])

    const handleDelete = async (id) => {
      await axios.delete(`${import.meta.env.VITE_BASE_API_URL}/pod/podcast/${id}`);
      setAllPodcasts(allPodcasts.filter(podcast => podcast._id !== id));     
    };
  

  return (
  <div className='allPodcasts'>
  <h2> Your Podcasts </h2>
    {allPodcasts && allPodcasts.map((onePodcast) => {
        return (
       <Card key={onePodcast._id} style={{ width: 350, height: 600, margin: 15 }}>
       <h1>{onePodcast.podcastname}</h1>
       <h1>{onePodcast.podcastdescription}</h1>
       <h1>{onePodcast.podcastcategory}</h1>
       <h1>{onePodcast.podcastaudio}</h1>
       <h1>{onePodcast.podcastimage}</h1>
       <h1>{onePodcast.episodename}</h1>

       <Link to={`/updatePodcast/${onePodcast._id}`}><button type='button'>Update Podcast</button></Link>
       <Link to={`/addReview/${onePodcast._id}`}><button type='button'>Add a review</button></Link>
       <button type='button' onClick={() => handleDelete(onePodcast._id)}> Delete Podcast </button>
        </Card>
        
        )}
      )}
      <button type="button" onClick={() => nav('/profile')}>Back</button>
   </div>
  )
}

export default ViewPodcast