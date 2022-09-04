import React from 'react';

const SearchBox = (props) => {
  return (
    <div className='col-sm-3 search-box px-3 pb-2'>
        <input className='form-control' 
               placeholder='Search...'
               value={props.value}
               onChange={(event) => props.setSearchValue(event.target.value)}>
        </input>
    </div>
  )
}

export default SearchBox;