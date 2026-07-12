import { Search } from 'lucide-react';
import './SearchBar.css';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    }

    return (
        <form className='search-container' onSubmit={(e) => e.preventDefault()}>
            <input 
            type="text"
            className='search-input'
            placeholder='Buscar producto...'
            value={searchQuery}
            onChange={handleChange}

            />

            <button type='button' className='search-btn'>
                <Search size={20} />
            </button>
        </form>
    )
}

export default SearchBar;