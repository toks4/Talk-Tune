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
  if (!user) {
    return <p>Loading</p>
   }

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
      <h4>Update Podcast</h4>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
      <label>Podcast Creator: {user.firstname} {user.lastname}</label>
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
          <select value={podcastcategory} onChange={(event) => setPodcastCategory(event.target.value)} >
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

        <button className='updatePodcastBtn' type="submit" > Update Podcast </button>
        <button type="button" onClick={() => nav('/viewPodcast')}>Back</button>
      </form>
    </div>
  );
}

export default UpdatePodcast;
