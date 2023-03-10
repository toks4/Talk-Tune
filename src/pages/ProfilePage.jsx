import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Divider } from 'antd';
import { useContext } from 'react';
import { SessionContext } from '../contexts/SessionContext';


function ProfilePage() {
    const navigate = useNavigate()


const {user} = useContext(SessionContext)

useEffect(() => {
    if (!user) {
    navigate('/login')
    }
 },[]);


  return (
    <div>
    <form className='profilePageForm'>
    <h1 className='profilePageTitle'>Hi, {user&& user.firstname}!</h1>
    
{/*<Upload
  name="avatar"
  listType="picture-circle"
  className="avatar-uploader"
  showUploadList={false}
  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
  beforeUpload={beforeUpload}
  onChange={handleChange}
  crossOrigin="anonymous"
>
  {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
</Upload>
*/}

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