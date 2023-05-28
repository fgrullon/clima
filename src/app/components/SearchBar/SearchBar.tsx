"use client";
import { useState, Dispatch, SetStateAction } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
interface Props {
    setCity : Dispatch<SetStateAction<string>>
}
const SearchBar = ({ setCity } : Props)  => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    } 

    const Search = () => {
        if (searchTerm.length > 0) {
            setCity(searchTerm)
        }
    }

    return (
        <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 600 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleSearch} 
          value={searchTerm}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={Search}>
          <SearchIcon />
        </IconButton>
      </Paper>
    );
}

export default SearchBar;