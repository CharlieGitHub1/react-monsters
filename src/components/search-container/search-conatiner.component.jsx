import React from 'react';

import './search-container.styles.css';

export const SearchContainer = ({ placeholder, handleChange }) => (
    <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
    />
);