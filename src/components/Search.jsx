import React from 'react';
import { Divider } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, FormControl, InputGroup } from 'react-bootstrap';


function Search({ filterAll }) {

    const [searchQuery, setSearchQuery] = useState('');
  
    const handleInput = event => {
      setSearchQuery(event.target.value);
      filterAll(event.target.value);
    }

  return (
    <div className='explorePageSearchBar'>
     <Divider>Search</Divider>
      <Container>
       <InputGroup className='explorePageSearch'>
        <FormControl
        className='searchBar'
        placeholder='Search'
        type="input"
        onKeyPress={event => {
        if (event.key == "Enter") {
        console.log("Pressed enter");
        }
      }}
      value={searchQuery} onChange={handleInput}
      />
          <Link>
           <Button className='searchBtn' type='submit'
           onClick={() => {console.log("Clicked Button")}} > Search </Button>
          </Link>
       </InputGroup>
     </Container>
    </div>   
  ); 
}


export default Search;