import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { SessionContext } from '../contexts/SessionContext';

function CreatePodcast() {
    const [podcastname, setPodcastName] = React.useState()
    const [podcastdescription, setPodcastDescription] = React.useState()
    const [podcastcategory, setPodcastCategory] = React.useState()
    const [podcastaudio, setPodcastAudio] = React.useState()
    const [podcastimage, setPodcastImage] = React.useState()
    const [episodename, setEpisodeName] = React.useState()
    const nav = useNavigate()
    const {user} = useContext(SessionContext)
    if (!user) {
      return <p>Loading</p>
     }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const CreatePodcast = {podcastname, podcastdescription, podcastcategory,
        podcastaudio, podcastimage, episodename}
        console.log(CreatePodcast)
        const response = await axios.post(`${import.meta.env.VITE_BASE_API_URL}/pod/podcast`, CreatePodcast)


        setPodcastName('')
        setPodcastDescription('')
        setPodcastCategory('')
        setPodcastAudio('')
        setPodcastImage('')
        setEpisodeName('')


        nav('/viewPodcast')

    }

  return (
    <div>
        <h4>Create Podcast </h4>
        <form style = {{display : "flex", flexDirection: 'column'}} onSubmit={handleSubmit}>
        <label>Podcast Creator: {user.firstname} {user.lastname}</label>
        <label>Name: <input type= "text" onChange = {event => setPodcastName (event.target.value)}></input></label>
        <label>Description: <input type= "text" onChange = {event => setPodcastDescription (event.target.value)}></input></label>
        <label>Category:
        <select value={podcastcategory} onChange = {event => setPodcastCategory (event.target.value)}>
        <option> Choose Category </option>
        <option value="business">Business</option>
          <option value="tech">Technology</option>
          <option value="news">News</option>
          <option value="education">Education</option>
          <option value="science">Science</option>
          <option value="health/fitness">Health & Fitness</option>
          <option value="sports">Sports</option>
          <option value="comedy">Comedy</option>
          <option value="fiction">Fiction</option>
          <option value="religion/spirituality">Religion/Spirituality</option>
          <option value="arts">Arts</option>
          <option value="music">Music</option>
          <option value="tv/film">TV & Film</option>
          <option value="history">History</option>
          <option value="culture">Society & Culture</option>
          <option value="truecrime">True Crime</option>
        </select>
        </label>
        <label>Audio: <input type= "text" onChange = {event => setPodcastAudio(event.target.value)}></input></label>
        <label>Image: <input type= "text" onChange = {event => setPodcastImage (event.target.value)}></input></label>
        <label>Episode: <input type= "text" onChange = {event => setEpisodeName(event.target.value)}></input></label>

        <button type="submit" >Create Podcast</button>
        <button type="button" onClick={() => nav('/profile')}>Back</button>

        </form>
    </div>
  )
}

export default CreatePodcast