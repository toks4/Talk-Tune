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
        const response = await axios.post('http://localhost:5005/pod/podcast', CreatePodcast)


        setPodcastName('')
        setPodcastDescription('')
        setPodcastCategory('')
        setPodcastAudio('')
        setPodcastImage('')
        setEpisodeName('')


        nav('/viewPodcast')

    }

  return (
    <div className='createPodcast'>
        <h4>Create Podcast </h4>
        <form style = {{display : "flex", flexDirection: 'column'}} onSubmit={handleSubmit} className="createPodcastForm">
        <label className='podcastCreator'>Podcast Creator: {user.firstname} {user.lastname}</label>
        <label>Name: <input type= "text" onChange = {event => setPodcastName (event.target.value)}></input></label>
        <label>Description: <input type= "text" onChange = {event => setPodcastDescription (event.target.value)}></input></label>
        <label>Category:
        <select value={podcastcategory} onChange = {event => setPodcastCategory (event.target.value)} className='chooseCategory'>
        <option value="Choose Category"> Choose Category </option>
        <option value="Business">Business</option>
          <option value="Tech">Technology</option>
          <option value="News">News</option>
          <option value="Education">Education</option>
          <option value="Science">Science</option>
          <option value="Health/Fitness">Health & Fitness</option>
          <option value="Sports">Sports</option>
          <option value="Comedy">Comedy</option>
          <option value="Fiction">Fiction</option>
          <option value="Religion/Spirituality">Religion/Spirituality</option>
          <option value="Arts">Arts</option>
          <option value="Music">Music</option>
          <option value="Tv/Film">TV & Film</option>
          <option value="History">History</option>
          <option value="Culture">Society & Culture</option>
          <option value="TrueCrime">True Crime</option>
        </select>
        </label>
        <label>Audio: <input type= "text" onChange = {event => setPodcastAudio(event.target.value)}></input></label>
        <label>Image: <input type= "text" onChange = {event => setPodcastImage (event.target.value)}></input></label>
        <label>Episode: <input type= "text" onChange = {event => setEpisodeName(event.target.value)}></input></label>

        <button type="submit" className='createPodcastBtn'>Create Podcast</button>
        <button type="button" className='createPodcastBtnBack' onClick={() => nav('/profile')}>Back</button>

        </form>
    </div>
  )
}

export default CreatePodcast