import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useContext, useEffect } from 'react';
import { SessionContext } from '../contexts/SessionContext';
import { useParams } from 'react-router-dom';

function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState('')
  const { user } = useContext(SessionContext)
  const [reviews, setReviews] = useState()
  const { podcastId } = useParams()

  const podcastReview = async () => {
      try {
          const response = await axios.get(`http://localhost:5005/reviews/${podcastId}`)
          setReviews(response.data)
          console.log(response.data);
      } catch (error) {
          console.log(error);
      }
  }

  useEffect(() =>{
      podcastReview()  
  }
  ,[]) 
  
  const handleReviewSubmit = async (event) => {
    //console.log(user)
    event.preventDefault()
    const CreateReview = {rating, content, creator: user._id, podcast: podcastId }
    
     // console.log(CreateReview)
      const response = await axios.post(`http://localhost:5005/reviews/addReviews`, CreateReview)
      //console.log(response);
  }

  return (
    <form onSubmit={handleReviewSubmit}>
        <label>Rating:<input type='number' value={rating} onChange={event => setRating(event.target.value)}/></label>
        <label>Review:<input type='text' value={content} onChange={event => setContent(event.target.value)}/></label>
        <button type='submit'>Post</button>
    </form>
  )
}

export default ReviewForm