import React from 'react'
import NavBar from '../components/NavBar'
import { Navigate } from 'react-router-dom'
import axios from 'axios';

function CreatePodcast() {
    const [podcastname, setPodcastName] = React.useState()
    const [podcastdescription, setPodcastDescription] = React.useState()
    const [podcascategory, setPodcastCategory] = React.useState()
    const [podcastaudio, setPodcastAudio] = React.useState()
    const [podcastimage, setPodcastImage] = React.useState()
    const [podcastepisode, setPodcastEpisode] = React.useState()


    const handleSubmit = async (event) => {
        event.preventDefault()

        const CreatePodcast = {name, description, category, audio, image, episode}
        console.log(CreatePodcast)
        const response = await axios.post('http://localhost:5005/pod/podcasts', CreatePod)


        setPodcastName('')
        setPodcastDescription('')
        setPodcastCategory('')
        setPodcastAudio('')
        setPodcastImage('')
        setPodcastEpisode('')


        Navigate('/updatepodcast')


    }
   const podcastUpdate = {name, description, category, audio, image, episode}
   const response =  axios.put('http://localhost:5005/pod/podcasts', podcastUpdate)
   setPodcastName('')
        setPodcastDescription('')
        setPodcastCategory('')
        setPodcastAudio('')
        setPodcastImage('')
        setPodcastEpisode('')



  return (
    <div>
        <NavBar />
        <h4>CreatePod</h4>
        <form stlye = {{display : "flex", flexDirection: 'column'}}onSubmit={handleSubmit}>
        <label>Name; <input type= "text" onChange = {event => setName (event.target.value)}></input></label>
        <label>description; <input type= "text" onChange = {event => setPodcastDescription (event.target.value)}></input></label>
        <label>Category; <input type= "text" onChange = {event => setPodcastCategory (event.target.value)}></input></label>
        <label>Audio; <input type= "text" onChange = {event => setPodcastAudio(event.target.value)}></input></label>
        <label>Image; <input type= "text" onChange = {event => setPodcastImage (event.target.value)}></input></label>
        <label>Episode; <input type= "text" onChange = {event => setPodcastEpisode(event.target.value)}></input></label>



        <button type="submit">CreatePod</button>
        <button type="button" onClick={() => Navigate('/updatepodcast')}>Back</button>




        </form>
    </div>
  )
}

export default CreatePodcast