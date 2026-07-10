import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList/ProductList';
import Sidebar from '../components/Sidebar/SideBar';
import './Home.css';

const Home = ({ productos, addToCart, searchQuery }) => {
  
  const productosFiltrados = productos.filter(prod => 
    prod.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
    prod.categoria.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="home-layout">
        <div className="product-section">
          <div className="section-header">
            <h2 className="section-title">
              {searchQuery ? `Resultados para "${searchQuery}"` : "Productos Destacados"}
            </h2>
            <Link to="#" className="view-all">Ver todos</Link>
          </div>
          
          {productosFiltrados.length > 0 ? (
            <ProductList productos={productosFiltrados} addToCart={addToCart} />
          ) : (
            <p style={{ color: '#6b7280', marginTop: '20px' }}>
              No se encontraron productos con esa búsqueda.
            </p>
          )}
        </div>
        <div className="sidebar-section">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Home;