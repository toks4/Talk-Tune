import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'antd';
import Search from '../components/Search';

function ExplorePage() {
  return (
    <div>
        <h1> Explore Page </h1>
        <Search />
        <Divider />
        <Link to='/explore/allPodcasts'>
        <button className='podcastsBtn' type='submit'> Podcasts </button>
        </Link>
        <Link>
        <button className='categoriesBtn' type='submit'> Categories </button>
        </Link>
        <Link>
        <button className='creatorsBtn' type='submit'> Creators </button>
        </Link>
        <Link>
        <button className='topicsBtn' type='submit'> Topics </button>
        </Link>
        <Link>
        <button className='episodesBtn' type='submit'> Episodes </button>
        </Link>
    </div>
  )


  
}

export default ExplorePage