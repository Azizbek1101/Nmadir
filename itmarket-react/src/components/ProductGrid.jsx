// src/components/ProductGrid.jsx
import { useState, useEffect } from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductGrid({
  category,
  search,
  cart,
  favourites,
  onToggleCart,
  onToggleFavourite,
  onOpenDetail,
}) {
  const [loading, setLoading] = useState(true);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      let result = products;
      if (category === 'favourites') {
        result = products.filter((p) => favourites.includes(p.id));
      } else {
        result = products.filter((p) => {
          const matchCat = category === 'all' || p.category === category;
          return matchCat;
        });
      }
      const q = search.toLowerCase().trim();
      if (q) {
        result = result.filter(
          (p) => p.name.toLowerCase().includes(q) || p.category.includes(q)
        );
      }
      setFiltered(result);
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [category, search, favourites]);

  if (loading) {
    return (
      <div className="shimmer-wrap">
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="shimmer-card">
              <div className="shimmer-img"></div>
              <div className="shimmer-line"></div>
              <div className="shimmer-line short"></div>
              <div className="shimmer-line btn-line"></div>
            </div>
          ))}
      </div>
    );
  }

  if (filtered.length === 0) {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: 'clamp(30px, 6vw, 60px) 0',
          opacity: 0.6,
        }}
      >
        <i
          className="fas fa-search"
          style={{
            fontSize: 'clamp(32px, 6vw, 48px)',
            display: 'block',
            marginBottom: 12,
            opacity: 0.3,
          }}
        ></i>
        <p style={{ fontSize: 'clamp(14px, 1.5vw, 18px)' }}>
          Hech qanday mahsulot topilmadi
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(150px, 25vw, 260px), 1fr))',
        gap: 'clamp(12px, 2vw, 24px)',
        padding: '16px 0 60px',
      }}
    >
      {filtered.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          inCart={cart.some((item) => item.id === p.id)}
          inFavourite={favourites.includes(p.id)}
          onToggleCart={onToggleCart}
          onToggleFavourite={onToggleFavourite}
          onOpenDetail={onOpenDetail}
        />
      ))}
    </div>
  );
}