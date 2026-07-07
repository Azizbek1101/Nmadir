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
    <div className="product-card" onClick={handleCardClick}>
      <div className="product-image">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
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

      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <div className="product-name">
          {product.emoji} {product.name}
        </div>
        <div className="product-price">
          {new Intl.NumberFormat('uz-UZ').format(product.price)} <small style={{ fontSize: 13, fontWeight: 400, opacity: 0.6 }}>so'm</small>
        </div>
        <div className="product-actions">
          <button
            className={`cart-btn ${inCart ? 'in-cart' : ''}`}
            onClick={(e) => handleButtonClick(e, onToggleCart)}
          >
            <i className={`fas ${inCart ? 'fa-check' : 'fa-plus'}`}></i>
            {inCart ? 'Savatda' : "Qo'shish"}
          </button>
          <button
            className={`fav-btn ${inFavourite ? 'active' : ''}`}
            onClick={(e) => handleButtonClick(e, onToggleFavourite)}
          >
            <i className={inFavourite ? 'fas fa-heart' : 'far fa-heart'}></i>
          </button>
        </div>
      </div>
    </div>
  );
}