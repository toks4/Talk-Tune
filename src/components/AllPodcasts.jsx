/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Credentials } from './Credentials';

function AllPodcasts() {

  const spotify = Credentials();

  console.log('RENDERING APP.JS');

  const [token, setToken] = useState('');
  const [shows, setShows] = useState([]);

  useEffect(() => {
    // Get access token from Spotify API
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic' + (spotify.ClientId + ':' + spotify.ClientSecret).toString('base64')
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
    .then(tokenResponse => {      
      console.log(tokenResponse.data.access_token);
      setToken(tokenResponse.data.access_token);
    }
   )},
  },

  [spotify.ClientId, spotify.ClientSecret],
  
    

  return (
    <div className='container'>
      <h1> All Podcasts </h1>
     <button type='submit'> Search </button>
    </div>
  ),

export default AllPodcasts; */