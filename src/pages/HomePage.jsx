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
    <div className='catagoriesPodcast'>
    <h1 class='exploreCategoriesText'>Explore <span class='exploreCategoriesPodcastText'>Podcast</span> Categories</h1>
    <div class='exploreCategorieRow1'>
    <button type='button' class='comedyBtn'>🎭 COMEDY</button>
    <button type='button' class='artBtn'>🎨 ART</button>
    <button type='button' class='techBtn'>💻 TECHNOLOGY</button>
    <button type='button' class='newsBtn'>📰 NEWS</button>
    <button type='button' class='scienceBtn'>🧬 SCIENCE</button>
    <button type='button' class='educationBtn'>🏫 EDUCATION</button>
    </div>
    <div class='exploreCategorieRow2'>
    <button type='button' class='comedyBtn'>🎭 COMEDY</button>
    <button type='button' class='artBtn'>🎨 ART</button>
    <button type='button' class='techBtn'>💻 TECHNOLOGY</button>
    <button type='button' class='newsBtn'>📰 NEWS</button>
    <button type='button' class='scienceBtn'>🧬 SCIENCE</button>
    <button type='button' class='educationBtn'>🏫 EDUCATION</button>
    </div>
    <div class='exploreCategorieRow3'>
    <button type='button' class='comedyBtn'>🎭 COMEDY</button>
    <button type='button' class='artBtn'>🎨 ART</button>
    <button type='button' class='techBtn'>💻 TECHNOLOGY</button>
    <button type='button' class='newsBtn'>📰 NEWS</button>
    <button type='button' class='scienceBtn'>🧬 SCIENCE</button>
    <button type='button' class='educationBtn'>🏫 EDUCATION</button>
    </div>
    </div>


  </div>
  )
}

export default HomePage