import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Divider } from 'antd';
import { useContext } from 'react';
import { SessionContext } from '../contexts/SessionContext';
import ReactDOM from 'react-dom';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import axios from 'axios';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must be smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const ProfilePage = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const { user } = useContext(SessionContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, []);

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadImage = async (formData) => {
    try {
      const response = await axios.post('/api/profile/upload-image', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpload = async () => {
    if (!imageUrl) {
      return;
    }
    const formData = new FormData();
    formData.append('image', imageUrl);
    await uploadImage(formData);
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );


  return (
    <div>
    <form className='profilePageForm'>
    <h1 className='profilePageTitle'>Hi, {user.firstname}!</h1>
    <Upload
  name="avatar"
  listType="picture-circle"
  className="avatar-uploader"
  showUploadList={false}
  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
  beforeUpload={beforeUpload}
  onChange={handleChange}
  crossOrigin="anonymous" // or crossOrigin="use-credentials"
>
  {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
</Upload>
    <Link to='/viewProfile'>
        <button className='viewProfileBtn' type='submit'> View Profile Information </button>
    </Link>
<Divider> </Divider>
<div className='profileButtons'>
<Link to='/favouritePodcast'>
        <button className='favPodcastsBtn' type='submit'> Favourite Podcast </button>
    </Link>
    <Link to='/createPodcast'>
        <button className='podcastsBtn' type='submit'> Create Podcast </button>
    </Link>
    <Link to='/viewPodcast'>
        <button className='viewPodcastsBtn' type='submit'> View Your Podcast(s) </button>
    </Link>
    </div>
    </form>
    </div>
  )
}

export default ProfilePage