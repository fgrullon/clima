"use client";
import { useState, Dispatch, SetStateAction } from 'react';

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
        <>
        <input 
            type="text" 
            placeholder="Search for cities" 
            onChange={handleSearch} 
            value={searchTerm} 
            style={{
                width: "50%", 
                height: "30px", 
                borderRadius: "15px", 
                padding:"5px",
                backgroundColor: "#d3d5d7",
                color: "black"
            }}
        />
        <button type="button" value="search" onClick={Search}>Search</button>
        </>
    );
}

export default SearchBar;