import React from 'react'
import { useNavigate } from 'react-router-dom'
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
    const { user } = useContext(SessionContext)


    const handleSubmit = async (event) => {
        event.preventDefault()

        const CreatePodcast = {podcastname, podcastdescription, podcastcategory,
        podcastaudio, podcastimage, episodename, creatorname:user._id}
        console.log(CreatePodcast)
        const response = await axios.post('http://localhost:5005/pod/podcast', CreatePodcast)


        setPodcastName('')
        setPodcastDescription('')
        setPodcastCategory('')
        setPodcastAudio('')
        setPodcastImage('')
        setEpisodeName('')


        nav('/profile')


    }



  return (
    <div>
        <h4>CreatePod</h4>
        <form stlye = {{display : "flex", flexDirection: 'column'}}onSubmit={handleSubmit}>
        <label>Name; <input type= "text" onChange = {event => setPodcastName (event.target.value)}></input></label>
        <label>description; <input type= "text" onChange = {event => setPodcastDescription (event.target.value)}></input></label>
        <label>Category; <input type= "text" onChange = {event => setPodcastCategory (event.target.value)}></input></label>
        <label>Audio; <input type= "text" onChange = {event => setPodcastAudio(event.target.value)}></input></label>
        <label>Image; <input type= "text" onChange = {event => setPodcastImage (event.target.value)}></input></label>
        <label>Episode; <input type= "text" onChange = {event => setEpisodeName(event.target.value)}></input></label>



        <button type="submit">CreatePod</button>
        <button type="button" onClick={() => nav('/profile')}>Back</button>




        </form>
    </div>
  )
}

export default CreatePodcast