import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const isUserConnected = true

  if (!isUserConnected) {
    return <Navigate to = "/login" />
  }
  return (
    <div className='homePage'>
    <img src='/src/assets/BackgroundHP.png' class='homePageBGImg'></img>
    <h1 class='homePageBGTitle1'>Self Development</h1>
    <h1 class='homePageBGTitle2'>Made Easy</h1>
    <p class='homePageP1'>Create your own podcasts.</p>
    <p class='homePageP2'>Listen to your favourite creators!</p>
    <Link to='/signup'><button type='button' class='homePageBtn'> Start Listening </button></Link>
    </div>
  )
}

export default HomePage