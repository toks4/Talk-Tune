import React from 'react'
import { useState } from 'react'

function reviewForm() {
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState('')
    
  handleReviewSubmit = async (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleReviewSubmit}>
        <label>Rating:<input type='number' value={rating} onChange={event => setRating(event.target.value)}/></label>
        <label>Review:<input type='text' value={content} onChange={event => setContent(event.target.value)}/></label>
        <button type='submit'>Post</button>
    </form>
  )
}

export default reviewForm