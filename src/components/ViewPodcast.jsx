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
        const response =  await axios.get(`http://localhost:5005/pod/podcast`)
       setAllPodcasts(response.data)
      }
      fetchPodcast()
    }, [])

    useEffect(() => {
      async function fetchPodReviews () {
        try {
          const response = await axios.get(`http://localhost:5005/reviews/${podcastId}`);
          setPodReviews(response.data);
          setPodReviews(response.data.reviews);
        } catch (error){
          console.log(error);
        }
      }
      fetchPodReviews();
    }, [podcastId]);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5005/pod/podcast/${id}`);
    setAllPodcasts(allPodcasts.filter((podcast) => podcast._id !== id));     
  };


  return (
  <div className='allPodcasts'>
    <h2 className='yourPodcastsTitle'> Your Podcasts </h2>
   <div className='flex-container'>
    {allPodcasts && allPodcasts.map((onePodcast) => {
     
        return (
       <Card key={onePodcast._id} style={{ width: 700, height: 450, margin: 15 }} >
       <div className='allPodcastsForm'>
       <h1>Podcast Name: {onePodcast.podcastname}</h1>
       <h1>Description: {onePodcast.podcastdescription}</h1>
       <h1>Category: {onePodcast.podcastcategory}</h1>
       <h1>Audio: {onePodcast.podcastaudio}</h1>
       <h1>Image:  {onePodcast.podcastimage}</h1>
       <h1>Epsiode: {onePodcast.episodename}</h1>
      
    
       <Link to={`/updatePodcast/${onePodcast._id}`}><button type='button' className='updatePodcastBtn'>Update Podcast</button></Link>
       <Link to={`/addReview/${onePodcast._id}`} ><button type='button' className='addReviewBtn'>Add a review</button></Link>
       <button type='button' onClick={() => handleDelete(onePodcast._id)} className='deleteBtn'> Delete Podcast </button>
       
       {podReviews.map((review) => (
                <Card key={review._id} style={{ margin: '15px 0' }}>
                  <p>Review: {review.review}</p>
                  <p>Rating: {review.rating}</p>
                </Card>
              ))}
              </div>
            </Card>
           
          );
        })}
      </div>
      <button type="button" onClick={() => nav('/profile')} className='backBtnPodcast'>
        Back
      </button>
      </div>
  );
}

export default ViewPodcast