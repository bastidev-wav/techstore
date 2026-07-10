import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item active"><Link to="/">INICIO</Link></li>
        <li className="nav-item">PRODUCTOS <ChevronRight size={14} style={{transform: 'rotate(90deg)'}}/></li>
        <li className="nav-item">OFERTAS</li>
        <li className="nav-item">NOSOTROS</li>
        <li className="nav-item">CONTACTO</li>
      </ul>
    </nav>
  );
};

export default Navbar