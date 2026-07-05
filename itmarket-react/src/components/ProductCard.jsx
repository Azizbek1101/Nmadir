import { useState } from 'react';

export default function ProductCard({ product, inCart, inFavourite, onToggleCart, onToggleFavourite, onOpenDetail }) {
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
        cursor: 'pointer'
      }}
    >
      <div style={{
        width: '100%',
        aspectRatio: '1 / 1',
        background: 'var(--input-bg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        borderBottom: '1px solid var(--border)'
      }}>
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onLoad={() => setImageLoaded(true)}
          />
        ) : (
          <div style={{ textAlign: 'center', opacity: 0.5, userSelect: 'none' }}>
            <i className="fas fa-image" style={{ fontSize: 44, display: 'block', marginBottom: 8 }}></i>
            <span style={{ background: 'var(--border)', padding: '4px 14px', borderRadius: 60, fontSize: 11 }}>
              Rasm qo'shing
            </span>
          </div>
        )}
      </div>

      <div style={{ padding: '16px 18px 18px', flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={{
          fontSize: 12,
          fontWeight: 500,
          color: 'var(--accent)',
          background: 'rgba(56,189,248,0.12)',
          padding: '2px 12px',
          borderRadius: 60,
          width: 'fit-content'
        }}>{product.category}</span>
        <div style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.3 }}>
          {product.emoji} {product.name}
        </div>
        <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--accent)', marginTop: 4 }}>
          {new Intl.NumberFormat('uz-UZ').format(product.price)} <small style={{ fontSize: 13, fontWeight: 400, opacity: 0.6 }}>so'm</small>
        </div>
        <div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
          <button
            onClick={(e) => handleButtonClick(e, onToggleCart)}
            style={{
              flex: 1,
              padding: '10px 0',
              borderRadius: 60,
              fontWeight: 600,
              fontSize: 14,
              border: 'none',
              background: inCart ? '#10b981' : 'var(--accent)',
              color: '#fff',
              boxShadow: inCart ? '0 4px 16px rgba(16,185,129,0.3)' : '0 4px 16px rgba(56,189,248,0.3)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              transition: '0.3s'
            }}
          >
            <i className={`fas ${inCart ? 'fa-check' : 'fa-plus'}`}></i>
            {inCart ? 'Savatda' : "Qo'shish"}
          </button>
          <button
            onClick={(e) => handleButtonClick(e, onToggleFavourite)}
            style={{
              flex: '0 0 44px',
              height: 44,
              borderRadius: 60,
              border: 'none',
              background: inFavourite ? 'rgba(56,189,248,0.2)' : 'transparent',
              color: '#38BDF8',
              cursor: 'pointer',
              transition: '0.3s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 18
            }}
          >
            <i className={inFavourite ? 'fas fa-heart' : 'far fa-heart'}></i>
          </button>
        </div>
      </div>
    </div>
  );
}