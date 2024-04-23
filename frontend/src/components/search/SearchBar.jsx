// SearchBar.js

import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Call the parent component's onSearch function with the searchQuery
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Search hackathon"
        value={searchQuery}
        onChange={handleSearchChange}
        className='border-4 border-blue-200 rounded-full px-4 py-2 w-[400px] outline-none text-black'
      />
      <button className='ml-3 bg-white p-3 rounded-full' type="submit"><FaSearch /></button>
    </form>
  );
};

export default SearchBar;

