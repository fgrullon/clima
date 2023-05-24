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
        <input type="text" placeholder="Search here" onChange={handleSearch} value={searchTerm} />
    );
}

export default SearchBar;