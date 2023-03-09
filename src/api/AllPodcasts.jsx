import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AllPodcasts() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    async function fetchShows() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/podcast/shows?ids=${ids}`);
        setShows(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchShows();
  }, []);

  return (
    <div>
      <h1>Shows</h1>
      {shows.map(show => (
        <div key={show.id} style={{ display: 'flex', flexDirection: 'column' }}>
          <h2>{show.copywright}</h2>
          <p>{show.description}</p>
        </div>
      ))}
    </div>
  );
}

export default AllPodcasts;
