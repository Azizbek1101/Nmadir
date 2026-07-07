// src/components/ProductCard.jsx
import { useState } from 'react';

export default function ProductCard({
  product,
  inCart,
  inFavourite,
  onToggleCart,
  onToggleFavourite,
  onOpenDetail,
}) {
  const [imageLoaded, setImageLoaded] = useState(false);

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
      }}
    >
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
        }}
      >
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onLoad={() => setImageLoaded(true)}
          />
        ) : (
          <div style={{ textAlign: 'center', opacity: 0.5, userSelect: 'none' }}>
            <i
              className="fas fa-image"
              style={{ fontSize: 'clamp(28px, 5vw, 44px)', display: 'block', marginBottom: 8 }}
            ></i>
            <span
              style={{
                background: 'var(--border)',
                padding: '2px 12px',
                borderRadius: 60,
                fontSize: 'clamp(10px, 1.2vw, 12px)',
              }}
            >
              Rasm qo‘shing
            </span>
          </div>
        )}
      </div>

      <div
        style={{
          padding: 'clamp(12px, 2vw, 18px)',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        <span
          style={{
            fontSize: 'clamp(10px, 1.2vw, 12px)',
            fontWeight: 500,
            color: 'var(--accent)',
            background: 'rgba(56,189,248,0.12)',
            padding: '2px 10px',
            borderRadius: 60,
            width: 'fit-content',
          }}
        >
          {product.category}
        </span>
        <div
          style={{
            fontSize: 'clamp(14px, 1.6vw, 16px)',
            fontWeight: 600,
            lineHeight: 1.3,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {product.emoji} {product.name}
        </div>
        <div
          style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            fontWeight: 800,
            color: 'var(--accent)',
            marginTop: 4,
          }}
        >
          {new Intl.NumberFormat('uz-UZ').format(product.price)}{' '}
          <small style={{ fontSize: 'clamp(10px, 1.2vw, 13px)', fontWeight: 400, opacity: 0.6 }}>
            so‘m
          </small>
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 'auto', paddingTop: 10 }}>
          <button
            onClick={(e) => handleButtonClick(e, onToggleCart)}
            style={{
              flex: 1,
              padding: '8px 0',
              borderRadius: 60,
              fontWeight: 600,
              fontSize: 'clamp(12px, 1.2vw, 14px)',
              border: 'none',
              background: inCart ? '#10b981' : 'var(--accent)',
              color: '#fff',
              boxShadow: inCart
                ? '0 4px 16px rgba(16,185,129,0.3)'
                : '0 4px 16px rgba(56,189,248,0.3)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              transition: '0.3s',
            }}
          >
            <i className={`fas ${inCart ? 'fa-check' : 'fa-plus'}`}></i>
            {inCart ? 'Savatda' : "Qo'shish"}
          </button>
          <button
            onClick={(e) => handleButtonClick(e, onToggleFavourite)}
            style={{
              flex: '0 0 clamp(36px, 5vw, 44px)',
              height: 'clamp(36px, 5vw, 44px)',
              borderRadius: 60,
              border: 'none',
              background: inFavourite ? 'rgba(56,189,248,0.2)' : 'transparent',
              color: '#38BDF8',
              cursor: 'pointer',
              transition: '0.3s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 'clamp(16px, 2vw, 18px)',
            }}
          >
            <i className={inFavourite ? 'fas fa-heart' : 'far fa-heart'}></i>
          </button>
        </div>
      </div>
    </div>
  );
}