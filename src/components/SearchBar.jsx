import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search }  from '@mui/icons-material';


const SearchBar = () => {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const q = term.trim();
    if (!q) return;
    navigate(`/search/${encodeURIComponent(q + ' Indonesia')}`);
  };

  return (
    <Paper component="form"
      onSubmit={onSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2, 
        boxShadow: 'none',
        mr:{ sm: 5}
      }}
      >

      <input
      className="search-bar"
      placeholder="Search..."
      value={term}
      onChange={(e) => setTerm(e.target.value)}
      />
      <IconButton type="submit" sx={{ p:'10px', color: 'red'}} >
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar