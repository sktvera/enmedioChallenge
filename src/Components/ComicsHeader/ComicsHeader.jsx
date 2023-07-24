import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Assets/styles.css'; 

const ComicsHeader = ({ searchTerm, handleSearchChange }) => {
  return (
    <div className='comics-header'>
       <h1 className="comics-title">
        Comics
      </h1>
      <div className={`search-input ${searchTerm ? 'focused' : ''}`}>
        <TextField
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            className: "search-input-textfield",
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
     
    </div>
  );
}

export default ComicsHeader;
