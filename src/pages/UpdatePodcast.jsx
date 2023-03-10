import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { SessionContext } from '../contexts/SessionContext';
import { PlusOutlined } from '@ant-design/icons';
import { Form, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Button } from 'antd';

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

    nav ('/viewPodcast');
  };


  return (
    <div className='updatePodcast'>
      <h4>Update Podcast</h4>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit} className='updatePodcastForm'>
      <label className='podcastCreator'>Podcast Creator: {user.firstname} {user.lastname}</label>
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
          <select value={podcastcategory} onChange={(event) => setPodcastCategory(event.target.value)} className='podcastCategory'>
          <option> Choose Category </option>
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
          <option value="True Crime">True Crime</option>
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
        <button type="button" onClick={() => nav('/viewPodcast')} className='createPodcastBtnBack'>Back</button>
      </form>
    </div>
  );
}

export default UpdatePodcast;
