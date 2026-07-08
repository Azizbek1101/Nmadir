import { useState } from 'react';

export default function ProductCard({
  product,
  inCart,
  inFavourite,
  onToggleCart,
  onToggleFavourite,
  onOpenDetail,
}) {
  // Rasmlar massivi – agar product.images mavjud bo‘lsa, shuni ishlat, aks holda bitta rasm
  const images = product.images && product.images.length > 0 ? product.images : [product.image];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleCardClick = () => {
    onOpenDetail(product.id);
  };

  const handleButtonClick = (e, callback) => {
    e.stopPropagation();
    callback(product.id);
  };

  return (
    <div
      onClick={handleCardClick}
      style={{
        background: 'var(--card-bg)',
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        boxShadow: 'var(--card-shadow)',
        border: '1px solid var(--border)',
        transition: '0.3s',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        height: '100%',
        width: '100%',
        position: 'relative',
      }}
    >
      {/* Rasm maydoni */}
      <div
        style={{
          width: '100%',
          aspectRatio: '1 / 1',
          background: 'var(--input-bg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          borderBottom: '1px solid var(--border)',
          overflow: 'hidden',
          userSelect: 'none',
        }}
      >
        <img
          src={images[currentIndex]}
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: '0.3s ease',
          }}
          onError={(e) => {
            // agar rasm yuklanmasa, placeholder
            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"%3E%3Crect width="200" height="200" fill="%23e2e8f0"/%3E%3Ctext x="50%25" y="50%25" font-family="sans-serif" font-size="18" fill="%2394a3b8" text-anchor="middle" dy=".3em"%3ERasm%3C/text%3E%3C/svg%3E';
          }}
        />

        {/* Slider tugmalari – faqat 2+ rasm bo‘lsa */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              style={{
                position: 'absolute',
                left: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.5)',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                cursor: 'pointer',
                transition: '0.2s',
                zIndex: 2,
                backdropFilter: 'blur(4px)',
              }}
            >
              ◀
            </button>
            <button
              onClick={nextSlide}
              style={{
                position: 'absolute',
                right: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.5)',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                cursor: 'pointer',
                transition: '0.2s',
                zIndex: 2,
                backdropFilter: 'blur(4px)',
              }}
            >
              ▶
            </button>

            {/* Indikator nuqtalari */}
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '6px',
                zIndex: 2,
                background: 'rgba(0,0,0,0.3)',
                padding: '4px 10px',
                borderRadius: '20px',
                backdropFilter: 'blur(4px)',
              }}
            >
              {images.map((_, idx) => (
                <span
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: idx === currentIndex ? '#fff' : 'rgba(255,255,255,0.5)',
                    cursor: 'pointer',
                    transition: '0.3s',
                    display: 'inline-block',
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Mahsulot ma'lumotlari */}
      <div
        style={{
          padding: 'clamp(10px, 1.5vw, 16px)',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}
      >
        <span
          style={{
            fontSize: 'clamp(10px, 1vw, 13px)',
            fontWeight: 500,
            color: 'var(--accent)',
            background: 'rgba(56,189,248,0.12)',
            padding: '2px 12px',
            borderRadius: '30px',
            width: 'fit-content',
          }}
        >
          {product.category}
        </span>
        <div
          style={{
            fontSize: 'clamp(13px, 1.4vw, 16px)',
            fontWeight: 600,
            lineHeight: 1.3,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            wordBreak: 'break-word',
          }}
        >
          {product.emoji} {product.name}
        </div>
        <div
          style={{
            fontSize: 'clamp(15px, 1.6vw, 20px)',
            fontWeight: 800,
            color: 'var(--accent)',
            marginTop: '2px',
          }}
        >
          {new Intl.NumberFormat('uz-UZ').format(product.price)}{' '}
          <small
            style={{
              fontSize: 'clamp(10px, 1vw, 13px)',
              fontWeight: 400,
              opacity: 0.6,
            }}
          >
            so‘m
          </small>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '6px',
            marginTop: 'auto',
            paddingTop: '8px',
          }}
        >
          <button
            onClick={(e) => handleButtonClick(e, onToggleCart)}
            style={{
              flex: 1,
              padding: '6px 0',
              borderRadius: '30px',
              fontWeight: 600,
              fontSize: 'clamp(11px, 1vw, 14px)',
              border: 'none',
              background: inCart ? '#10b981' : 'var(--accent)',
              color: '#fff',
              boxShadow: inCart
                ? '0 4px 12px rgba(16,185,129,0.3)'
                : '0 4px 12px rgba(56,189,248,0.3)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              transition: '0.3s',
              whiteSpace: 'nowrap',
              minHeight: 'clamp(28px, 3vw, 38px)',
            }}
          >
            <i
              className={`fas ${inCart ? 'fa-check' : 'fa-plus'}`}
              style={{ fontSize: 'clamp(10px, 0.9vw, 13px)' }}
            ></i>
            {inCart ? 'Savatda' : "Qo'shish"}
          </button>
          <button
            onClick={(e) => handleButtonClick(e, onToggleFavourite)}
            style={{
              flex: '0 0 clamp(30px, 4vw, 40px)',
              height: 'clamp(30px, 4vw, 40px)',
              borderRadius: '30px',
              border: 'none',
              background: inFavourite ? 'rgba(56,189,248,0.2)' : 'transparent',
              color: '#38BDF8',
              cursor: 'pointer',
              transition: '0.3s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 'clamp(14px, 1.6vw, 18px)',
              minWidth: 'clamp(30px, 4vw, 40px)',
            }}
          >
            <i className={inFavourite ? 'fas fa-heart' : 'far fa-heart'}></i>
          </button>
        </div>
      </div>
    </div>
  );
}