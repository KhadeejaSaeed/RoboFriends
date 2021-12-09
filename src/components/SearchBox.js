import React from 'react';

const SearchBox = (props) => {
    return <input placeholder='Search Robots' type='search' onChange={props.searchfield} className='pa3 ba b--green bg-lightest-blue'/>;
};

export default SearchBox;