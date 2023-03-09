import qs from 'qs';
import axios from 'axios';
import { Buffer } from "buffer";
import { useEffect } from 'react';

function AllPodcasts() {

 // useState

const client_id = '5e4bf8e584da4ce99238e7305c617eaf';
const client_secret = '4a4dd04228724ffea93723c585b51b3d';
const auth_token = Buffer.from(`${client_id}:${client_secret}`, 'utf-8').toString('base64');


useEffect(() => {
  getAuth();
 }, []);


const getAuth = async () => {
  try{
    //make post request to SPOTIFY API for access token, sending relavent info
    const token_url = 'https://accounts.spotify.com/api/token';
    const data = qs.stringify({'grant_type':'client_credentials'});

    const response = await axios.post(token_url, data, {
      headers: { 
        'Authorization': `Basic ${auth_token}`,
        'Content-Type': 'application/x-www-form-urlencoded' 
      }
    })
    //return access token
    console.log(response.data.access_token);   

    return response.data.access_token;
  }catch(error){
    //on fail, log the error in console
    console.log(error);
  }
}


const searchShows = async (ids) => {
  //request token using getAuth() function
  const access_token = await getAuth();
  //console.log(access_token);

  const api_url = `https://api.spotify.com/v1/shows?ids=${ids}`;
  //console.log(api_url);
  try{
    const response = await axios.get(api_url, {
      headers: {
        'Authorization': `Bearer ${access_token}`
      }
    });
      //console.log(response.data);
    return response.data.shows;
  }catch(error){
    console.log(error);
  }  
};

useEffect(() => {
 searchShows 
}, [])


return (
    <div>
      
    </div>
  )
}

export default AllPodcasts