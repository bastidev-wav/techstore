import { Link } from 'react-router-dom';
import { ShoppingCart, User, UserPlus, Facebook, Instagram, Twitter, Truck, ShieldCheck, Headphones } from 'lucide-react';
import SearchBar from '../SearchBar/SearchBar';
import Cart from '../Cart/Cart';
import './Header.css';

const Header = ({ cartItems, removeFromCart, searchQuery, setSearchQuery }) => {
  return (
    <header>
      <div className="top-bar">
        <div className="top-bar-left">
          <div className="top-bar-item"><Truck size={14} /> Envíos a todo Chile</div>
          <div className="top-bar-item"><ShieldCheck size={14} /> Compra segura</div>
          <div className="top-bar-item"><Headphones size={14} /> Soporte 24/7</div>
        </div>
        <div className="top-bar-right">
          <a href="https://facebook.com/techstore" target="_blank" rel="noopener noreferrer"><Facebook size={14} /></a>
          <a href="https://instagram.com/techstore" target="_blank" rel="noopener noreferrer"><Instagram size={14} /></a>
          <a href="https://twitter.com/techstore" target="_blank" rel="noopener noreferrer"><Twitter size={14} /></a>
        </div>
      </div>

      <div className="main-header">
        <Link to="/" className="logo">
          <ShoppingCart className="logo-icon" size={32} />
          TechStore
        </Link>

        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <div className="header-actions">
          <button className="header-btn"><User size={20} /> Iniciar Sesión</button>
          <button className="header-btn"><UserPlus size={20} /> Registrarse</button>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
      </div>
    </header>
  );
};

export default Header;
