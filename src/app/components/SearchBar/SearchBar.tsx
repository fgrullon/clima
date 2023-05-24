"use client";
import { useState } from 'react';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    }

    if (searchTerm.length > 0) {
        console.log(searchTerm)
        //Do some request
    }

    return (
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
    );
}

export default SearchBar;