import React from 'react';
import { Divider } from 'antd';
import { useState } from 'react';


function Search({ filterAll }) {

    const [searchQuery, setSearchQuery] = useState('');
  
    const handleInput = event => {
      setSearchQuery(event.target.value);
      filterAll(event.target.value);
    }

  return (
    <div>
    <Divider>Search</Divider>
    <input type="text" value={searchQuery} onChange={handleInput} />
    </div>   
  ); 
}


export default Search;