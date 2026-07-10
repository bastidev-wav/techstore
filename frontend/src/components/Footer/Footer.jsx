import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard } from 'lucide-react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h4 className="footer-title">TechStore</h4>
          <p style={{ color: '#a0aec0', fontSize: '0.95rem', lineHeight: '1.6' }}>
            Tu destino número uno para la mejor tecnología. Innovación y calidad al alcance de tu mano.
          </p>
        </div>
        <div>
          <h4 className="footer-title">Enlaces Útiles</h4>
          <div className="footer-list">
            <Link to="#">Inicio</Link>
            <Link to="#">Productos</Link>
            <Link to="#">Ofertas Especiales</Link>
            <Link to="#">Seguimiento de Pedido</Link>
          </div>
        </div>
        <div>
          <h4 className="footer-title">Atención al Cliente</h4>
          <div className="footer-list">
            <Link to="#">Centro de Ayuda</Link>
            <Link to="#">Términos y Condiciones</Link>
            <Link to="#">Políticas de Privacidad</Link>
            <Link to="#">Garantías y Devoluciones</Link>
          </div>
        </div>
        <div>
          <h4 className="footer-title">Contacto</h4>
          <div className="footer-list">
            <span style={{ color: '#a0aec0', fontSize: '0.95rem' }}>contacto@techstore.cl</span>
            <span style={{ color: '#a0aec0', fontSize: '0.95rem' }}>+56 9 1234 5678</span>
            <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
              <a href="https://www.facebook.com/techstore" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/techstore" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="https://www.twitter.com/techstore" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TechStore. Todos los derechos reservados.</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <CreditCard size={24} />
        </div>
      </div>
    </footer>
  );
};

export default Footer