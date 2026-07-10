import { ShoppingCart, Star } from 'lucide-react';
import formatPrice from '../../utils/formatters';
import './ProductCard.css';

const ProductCard = ({ producto, addToCart }) => {
  const { imagen, nombre, precio, rating } = producto;
  const reviewsCount = Math.floor(Math.random() * 100) + 10;
  const ratingFinal = rating || 0;

  const renderStars = () => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={14} 
        fill={i < Math.floor(ratingFinal) ? "#fbbf24" : "transparent"} 
        stroke={i < Math.floor(ratingFinal) ? "#fbbf24" : "#cbd5e1"}
      />
    ));
  };

  return (
    <div className="product-card">
      <div className='image-container'>
        <img src={imagen} alt={nombre} className="card-image" loading="lazy" />
      </div>
      <h3 className="card-title">{nombre}</h3>
      <div className="card-rating">
        <div className="stars">{renderStars()}</div>
        <span className="reviews">({reviewsCount})</span>
      </div>
      <p className="card-price">{formatPrice(precio)}</p>
      
      <button className="btn-cart" onClick={() => addToCart(producto)}>
        <ShoppingCart size={18} /> Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;
