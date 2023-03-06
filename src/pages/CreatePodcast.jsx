import React from 'react'
import NavBar from '../components/NavBar'
import { Navigate } from 'react-router-dom'

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
        const response = await axios.post('http://localhost:5005/Auth/podcasts', CreatePod)


        setPodcastName('')
        setPodcastDescription('')
        setPodcastCategory('')
        setPodcastAudio('')
        setPodcastImage('')
        setPodcastEpisode('')


        Navigate('/updatepodcast')


    }




  return (
    <div>
        <NavBar />
        <h4>CreatePod</h4>
        <form stlye = {{display : "flex", flexDirection: 'column'}}onSubmit={handleSubmit}>
        <label>Name; <input type= "text" onChange = {event => setName (event.target.value)}></input></label>



        <button type="submit">CreatePod</button>
        <button type="button" onClick={() => Navigate('/updatepodcast')}>Back</button>




        </form>
    </div>
  )
}

export default CreatePodcast