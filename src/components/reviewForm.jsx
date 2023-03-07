import React from 'react'

function reviewForm() {
    
  return (
    <form >
        <label>Rating:<input type='number' value={rating} onChange={}/></label>
        <label>Review:<input type='text' value={review} onChange={}/></label>
        <button type='submit'>Post</button>
    </form>
  )
}

export default reviewForm