import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

const ProductList = ({ productos, addToCart }) => {
  return (
    <div className="product-grid">
      {productos.map(prod => (
        <ProductCard key={prod._id || prod.id} producto={prod} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;