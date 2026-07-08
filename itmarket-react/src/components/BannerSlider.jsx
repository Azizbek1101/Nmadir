import { useState, useEffect } from 'react';

const banners = [
  {
    id: 1,
    image: '/yang.png',
    category: 'all',
    label: 'Yangi mahsulotlar',
  },
  {
    id: 2,
    image: '/chegir.png',
    category: 'all',
    label: 'Chegirmalar',
  },
  {
    id: 3,
    image: '/nout.png',
    category: 'laptops',
    label: 'Noutbuklar',
  },
  {
    id: 4,
    image: '/texn.png',
    category: 'phones',
    label: 'Telefonlar',
  },
];

export default function BannerSlider({ onCategorySelect }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const handleBannerClick = () => {
    const category = banners[currentIndex].category;
    if (onCategorySelect) {
      onCategorySelect(category);
    }
  };

  return (
    <div className="banner-slider">
      <div
        className="banner-image"
        style={{
          backgroundImage: `url(${banners[currentIndex].image})`,
          cursor: 'pointer',
        }}
        onClick={handleBannerClick}
        title={banners[currentIndex].label}
      />

      <button
        onClick={prevSlide}
        style={{
          position: 'absolute',
          left: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.5)',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: '48px',
          height: '48px',
          fontSize: '24px',
          cursor: 'pointer',
          transition: '0.3s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(4px)',
          zIndex: 2,
        }}
      >
        ◀
      </button>

      <button
        onClick={nextSlide}
        style={{
          position: 'absolute',
          right: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.5)',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: '48px',
          height: '48px',
          fontSize: '24px',
          cursor: 'pointer',
          transition: '0.3s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(4px)',
          zIndex: 2,
        }}
      >
        ▶
      </button>

      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '10px',
          zIndex: 2,
        }}
      >
        {banners.map((_, idx) => (
          <span
            key={idx}
            onClick={() => goToSlide(idx)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: idx === currentIndex ? '#fff' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: '0.3s',
              display: 'inline-block',
            }}
          />
        ))}
      </div>
    </div>
  );
}