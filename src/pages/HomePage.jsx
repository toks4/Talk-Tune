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
    <img src='/src/assets/homePageBG.png' class='homePageBGImg2'></img>
    <h1 class='homePageBGTitle1'>Self Development</h1>
    <h1 class='homePageBGTitle2'>Made Easy</h1>
    <p class='homePageP1'>Create your own podcasts.</p>
    <p class='homePageP2'>Listen to your favourite creators!</p>
    <Link to='/homepageSignupBtn'><button type='button' class='homePageBtn'> Start Listening </button></Link>
    <div className='catagoriesPodcast'>
    <h1 class='exploreCategoriesTitle'>Explore <span class='exploreCategoriesPodcastText'>Podcast</span> Categories</h1>
    <div class='exploreCategorieRow1'>
    <button type='button' class='comedyBtn'>🎭 COMEDY</button>
    <button type='button' class='artBtn'>🎨 ART</button>
    <button type='button' class='techBtn'>📱 TECHNOLOGY</button>
    <button type='button' class='newsBtn'>📰 NEWS</button>
    <button type='button' class='scienceBtn'>🧬 SCIENCE</button>
    <button type='button' class='educationBtn'>📚 EDUCATION</button>
    </div>
    <div class='exploreCategorieRow2'>
    <button type='button' class='healthBtn'>🏅 HEALTH & FITNESS</button>
    <button type='button' class='fictionBtn'>🤖 FICTION</button>
    <button type='button' class='musicBtn'>🎸 MUSIC</button>
    <button type='button' class='societyBtn'>🌍 SOCIETY & CULTURE</button>
    <button type='button' class='historyBtn'>📜 HISTORY</button>
    </div>
    <div class='exploreCategorieRow3'>
    <button type='button' class='sportsBtn'>⚽ SPORTS</button>
    <button type='button' class='truecrimeBtn'>🔴 TRUE CRIME</button>
    <button type='button' class='religionBtn'>🙏 RELIGION & SPIRITUALITY</button>
    <button type='button' class='tvBtn'>🎬 TV *& FILM</button>
    <button type='button' class='businessBtn'>👩‍💼 BUSINESS</button>
    </div>
    </div>
    <div class='aboutTalkTune'>
    <h1 class='aboutTalkTuneTitle'>What is <span class='aboutTalkTuneTalk'>Talk</span> Tune</h1>
    <p class='aboutTalkTuneText'>Welcome to Talk-Tune, the podcast app that brings <br></br>
    you a diverse and captivating selection of podcasts to <br></br>
    enrich your free time. With our app, you'll have access <br></br>
    to a wide range of topics from inspiring personal stories <br></br>
    to fascinating conversations about science, politics, <br></br>
    and more.</p>
    <img src='/src/assets/talkTuneYoutube.png' class='talkTuneYoutubeImg'></img>
    </div>
    <div class='topPodcasts'>
    <h1 class='topPodcastsTitle'>Top <span class='topPodcastsTitleText'>Ranking</span> Podcasts</h1>
    </div>
  <footer className='footer'>
  <p><a href="/">Home</a></p>
  <p><a href="/">Signup</a></p>
  <p><a href="/">Explore</a></p>
  <p><a href="/">Login</a></p>
  </footer>
  </div>
  )
}

export default HomePage