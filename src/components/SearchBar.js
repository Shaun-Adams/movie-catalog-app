import React from 'react';
import { InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <SearchIcon sx={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }} />
      <InputBase
        placeholder="Search for movies"
        onChange={onSearch}
        sx={{
          color: 'inherit',
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
          },
          borderRadius: 1,
          padding: '2px 10px',
          paddingLeft: '30px',
          width: '100%',
        }}
      />
    </Box>
  );
};

export default SearchBar;
