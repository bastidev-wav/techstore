import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import './styles/global.css';
import Home from './pages/Home';
import Admin from './pages/Admin';

export default function App() {
  const [productos, setProductos] = useState([]);
  
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [toastMsg, setToastMsg] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        setProductos(res.data);
      } catch (error) {
        console.error("Error cargando productos", error);
      }
    }
    fetchProducts();
  }, []);

  const addToCart = (selectedProduct) => {
    const isItemInCart = cartItems.find(item => item._id === selectedProduct._id);

    if (isItemInCart) {
      setCartItems(cartItems.map(item =>
        item._id === selectedProduct._id ? { ...isItemInCart, qty: isItemInCart.qty + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...selectedProduct, qty: 1 }]);
    }

    setToastMsg(`¡${selectedProduct.nombre} agregado!`);
    setTimeout(() => {
      setToastMsg("");
    }, 3000);
  };

  const removeFromCart = (idToRemove) => {
    const targetItem = cartItems.find(item => item._id === idToRemove);
    
    if (targetItem?.qty > 1) {
      setCartItems(cartItems.map(item =>
        item._id === idToRemove ? { ...targetItem, qty: targetItem.qty - 1 } : item
      ));
    } else {
      setCartItems(cartItems.filter(item => item._id !== idToRemove));
    }
  };

  return (
    <Router>
      <div className="app-container">
        <Header 
          cartItems={cartItems} 
          removeFromCart={removeFromCart} 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <Banner />
                <Home 
                  productos={productos} 
                  addToCart={addToCart} 
                  searchQuery={searchQuery} 
                />
              </>
            } />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
        
        {toastMsg && (
          <div className="toast-notification">
            {toastMsg}
          </div>
        )}
      </div>
    </Router>
  );
}
