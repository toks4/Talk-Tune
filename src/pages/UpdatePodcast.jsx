import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { SessionContext } from '../contexts/SessionContext';

function UpdatePodcast() {
  const [podcastname, setPodcastName] = useState('');
  const [podcastdescription, setPodcastDescription] = useState('');
  const [podcastcategory, setPodcastCategory] = useState('');
  const [podcastaudio, setPodcastAudio] = useState('');
  const [podcastimage, setPodcastImage] = useState('');
  const [episodename, setEpisodeName] = useState('');
  const { podcastId } = useParams();
  const { user } = useContext(SessionContext);
  const nav = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:5005/pod/podcast/${podcastId}`);
      console.log(response.data)
      const { podcastname, podcastdescription, podcastcategory, podcastaudio, podcastimage, episodename } = response.data;
      setPodcastName(podcastname);
      setPodcastDescription(podcastdescription);
      setPodcastCategory(podcastcategory);
      setPodcastAudio(podcastaudio);
      setPodcastImage(podcastimage);
      setEpisodeName(episodename);
    };
    fetchData();
  }, [podcastId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedPodcast = {
      podcastname,
      podcastdescription,
      podcastcategory,
      podcastaudio,
      podcastimage,
      episodename,
    };

    const response = await axios.put(`http://localhost:5005/pod/podcast/${podcastId}`, updatedPodcast);
console.log(response.data)

nav ('/viewPodcast')

  };

  return (
    <div>
      <h4>Edit Podcast</h4>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={podcastname} onChange={(event) => setPodcastName(event.target.value)} />
        </label>
        <label>
          Description:
          <input type="text" value={podcastdescription} onChange={(event) => setPodcastDescription(event.target.value)} />
        </label>
        <label>
          Category:
          <input type="text" value={podcastcategory} onChange={(event) => setPodcastCategory(event.target.value)} />
        </label>
        <label>
          Audio:
          <input type="text" value={podcastaudio} onChange={(event) => setPodcastAudio(event.target.value)} />
        </label>
        <label>
          Image:
          <input type="text" value={podcastimage} onChange={(event) => setPodcastImage(event.target.value)} />
        </label>
        <label>
          Episode:
          <input type="text" value={episodename} onChange={(event) => setEpisodeName(event.target.value)} />
        </label>

        <button type="submit" > Update Podcast </button>
        <Link to='/profile'><button type="button" > Back </button></Link>
      </form>
    </div>
  );
}

export default UpdatePodcast;
