import React from 'react'
import ReviewForm from '../components/reviewForm'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Temporary() {
    const [reviews, setReviews] = useState()

    const podcastReview = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/reviews`)
            setReviews(response)
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() =>{
        podcastReview  
    }
    ,[])


  return (
    <div><ReviewForm/></div>
  )
}

export default Temporary