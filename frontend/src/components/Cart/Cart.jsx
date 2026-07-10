import { useState } from 'react';
import { ShoppingCart, Trash2 } from 'lucide-react';
import formatPrice from '../../utils/formatters';
import './Cart.css';

const Cart = ({ cartItems = [], removeFromCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const total = cartItems.reduce((acc, item) => acc + item.precio, 0);

  const [timeoutId, setTimeoutId] = useState(null);

const openCart = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsOpen(true);
};

const closeCart = () => {
    const id = setTimeout(() => {
        setIsOpen(false);
    }, 250);

    setTimeoutId(id);
};

  return (
    <div
    className="cart-wrapper"
    onMouseEnter={openCart}
    onMouseLeave={closeCart}
>
      
      <div className="cart-icon-container" onMouseEnter={() => setIsOpen(true)}>
        <ShoppingCart size={24} />
        {cartItems.length > 0 && <span className="cart-badge">{cartItems.length}</span>}
      </div>

      {isOpen && (
        <div className="cart-dropdown">
          <h4 className="cart-dropdown-title">Mi Carrito</h4>
          
          {cartItems.length === 0 ? (
            <p className="cart-empty">Tu carrito está vacío</p>
          ) : (
            <>
              <div className="cart-items-list">
                {cartItems.map((item, index) => (
                  <div key={index} className="cart-item">
                    <img src={item.imagen} alt={item.nombre} className="cart-item-img" />
                    <div className="cart-item-info">
                      <p className="cart-item-name">{item.nombre}</p>
                      <p className="cart-item-price">{formatPrice(item.precio)}</p>
                    </div>
                    <button className="cart-item-delete" onClick={() => removeFromCart(index)}>
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="cart-total">
                <span>Total:</span>
                <span>{formatPrice(total)}</span>
              </div>
              <button className="cart-checkout-btn">Ir a Pagar</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
