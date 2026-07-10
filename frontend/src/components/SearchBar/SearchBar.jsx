import { useState } from 'react';
import { Search } from 'lucide-react';
import './SearchBar.css'

const SearchBar = ({ setSearchQuery }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery(query);
    };

    const handleChange = (e) => {
        setQuery(e.target.value);
        if (e.target.value === '') {
            setSearchQuery('');
        }
    };

    return (
        <form className="search-container" onSubmit={handleSearch}>
            <input
                type="text"
                className="search-input"
                placeholder="Buscar productos..."
                value={query}
                onChange={handleChange}
            />

            <button type="submit" className="search-btn">
                <Search size={20} />
            </button>
        </form>
    )
}

export default SearchBar;
