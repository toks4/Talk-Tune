import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useContext } from 'react';
import { SessionContext } from '../contexts/SessionContext';

function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState('')
  const { user } = useContext(SessionContext)
    
  const handleReviewSubmit = async (event) => {
    console.log({user})
    event.preventDefault()
    const CreateReview = {rating, content, creator: 'test' }
    
      console.log(CreateReview)
      const response = await axios.post('http://localhost:5005/reviews/addReviews', CreateReview)
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