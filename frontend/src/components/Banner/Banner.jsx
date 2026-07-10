import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Banner.css'

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "La tecnología que lleva tu mundo al siguiente nivel",
      subtitle: "Descubre los mejores productos en tecnología con las mejores ofertas.",
      img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&h=600&fit=crop&bg=transparent",
      bg: "linear-gradient(135deg, #0a0a2a 0%, #1a1a4a 100%)"
    },
    {
      id: 2,
      title: "Equipa tu Setup Gamer Pro",
      subtitle: "Monitores 165Hz, teclados mecánicos y mouses de ultra precisión.",
      img: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&h=600&fit=crop&bg=transparent",
      bg: "linear-gradient(135deg, #1f0a2a 0%, #3a1a4a 100%)"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="banner-container">
      {slides.map((slide, index) => (
        <div 
          key={slide.id} 
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ background: slide.bg }}
        >
          <div className="slide-content">
            <h1 className="slide-title">{slide.title}</h1>
            <p className="slide-subtitle">{slide.subtitle}</p>
            <button className="btn-primary">
              VER OFERTAS <ChevronRight size={18} />
            </button>
          </div>
          <div className="slide-image">
            <img src={slide.img} alt="Banner Promocional" />
          </div>
        </div>
      ))}
      
      <button className="slider-btn prev" onClick={prevSlide}><ChevronLeft /></button>
      <button className="slider-btn next" onClick={nextSlide}><ChevronRight /></button>

      <div className="slider-dots">
        {slides.map((_, idx) => (
          <div 
            key={idx} 
            className={`dot ${idx === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner