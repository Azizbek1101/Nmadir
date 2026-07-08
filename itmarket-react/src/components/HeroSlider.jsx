// src/components/HeroSlider.jsx
import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: 'Arzon narxlar kafolati',
    subtitle: 'Eng yaxshi tovarlar eng past narxlarda',
    image: 'https://images.uzum.uz/c5f4u77e6t19j5l67m40/original.jpg',
    link: '/',
  },
  {
    id: 2,
    title: 'Mebel',
    subtitle: 'Uyingiz uchun eng zamonaviy mebellar',
    image: 'https://images.uzum.uz/c7f4u77e6t19j5l67m41/original.jpg',
    link: '/',
  },
  {
    id: 3,
    title: 'Elektronika',
    subtitle: 'Eng so‘nggi texnologiyalar',
    image: 'https://images.uzum.uz/c9f4u77e6t19j5l67m42/original.jpg',
    link: '/',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: 'clamp(180px, 40vw, 400px)',
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        marginBottom: '20px',
        background: 'var(--card-bg)',
        boxShadow: 'var(--card-shadow)',
      }}
    >
      <div
        style={{
          display: 'flex',
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: `translateX(-${current * 100}%)`,
          height: '100%',
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            style={{
              flex: '0 0 100%',
              height: '100%',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '20%',
                left: '5%',
                color: '#fff',
                textShadow: '0 2px 20px rgba(0,0,0,0.5)',
                maxWidth: '60%',
              }}
            >
              <h2 style={{ fontSize: 'clamp(24px, 5vw, 48px)', fontWeight: 800, marginBottom: 4 }}>
                {slide.title}
              </h2>
              <p style={{ fontSize: 'clamp(14px, 2vw, 24px)', opacity: 0.9 }}>
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Tugmalar */}
      <button
        onClick={prevSlide}
        style={{
          position: 'absolute',
          left: 12,
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.5)',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: 'clamp(36px, 5vw, 50px)',
          height: 'clamp(36px, 5vw, 50px)',
          fontSize: 'clamp(18px, 2vw, 28px)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: '0.3s',
          zIndex: 10,
        }}
        onMouseEnter={(e) => (e.target.style.background = 'rgba(0,0,0,0.7)')}
        onMouseLeave={(e) => (e.target.style.background = 'rgba(0,0,0,0.5)')}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        onClick={nextSlide}
        style={{
          position: 'absolute',
          right: 12,
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.5)',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: 'clamp(36px, 5vw, 50px)',
          height: 'clamp(36px, 5vw, 50px)',
          fontSize: 'clamp(18px, 2vw, 28px)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: '0.3s',
          zIndex: 10,
        }}
        onMouseEnter={(e) => (e.target.style.background = 'rgba(0,0,0,0.7)')}
        onMouseLeave={(e) => (e.target.style.background = 'rgba(0,0,0,0.5)')}
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Indikator nuqtalari */}
      <div
        style={{
          position: 'absolute',
          bottom: 12,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 8,
          zIndex: 10,
        }}
      >
        {slides.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            style={{
              width: 'clamp(8px, 1.2vw, 12px)',
              height: 'clamp(8px, 1.2vw, 12px)',
              borderRadius: '50%',
              background: idx === current ? '#fff' : 'rgba(255,255,255,0.4)',
              cursor: 'pointer',
              transition: '0.3s',
            }}
          />
        ))}
      </div>
    </div>
  );
}