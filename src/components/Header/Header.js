import React from 'react';

const Header = (props) => {
  return (
    <div className='col movie-list-header'>
        <h1>{props.heading}</h1>
    </div>
  )
}

export default Header;