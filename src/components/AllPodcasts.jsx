import React from 'react'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap';

function AllPodcasts() {
const [searchInput, setSearchInput] = useState("");

  return (
    <div className='AllPodcasts'>
    <Container>
    <InputGroup className='mb-3' size='1g'>
     <FormControl
       placeholder='Search For Podcast'
       type="input"
       onKeyPress={event => {
        if (event.key == "Enter") {
        console.log("Pressed enter");
        }
      }}
       onChange={event => setSearchInput(event.target.value)}
    />
    <Button onClick={() => {console.log("Clicked Button")}}>
    Search
    </Button>
    </InputGroup>
  </Container>
  </div>
  );
}

export default AllPodcasts