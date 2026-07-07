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
  const [visibleCount, setVisibleCount] = useState(10); // har safar 10 ta qo'shiladi
  const pageSize = 10;

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
      setVisibleCount(pageSize); // filter o'zgarganda yana 10 ta qilib qo'yamiz
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [category, search, favourites]);

  const loadMore = () => {
    setVisibleCount((prev) => prev + pageSize);
  };

  const displayedProducts = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  if (loading) {
    return (
      <div className="shimmer-wrap">
        {Array(8).fill(0).map((_, i) => (
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
      <div style={{ textAlign: 'center', padding: 'clamp(40px, 8vw, 80px) 0', opacity: 0.6 }}>
        <i className="fas fa-search" style={{ fontSize: 'clamp(40px, 6vw, 60px)', display: 'block', marginBottom: 12, opacity: 0.3 }}></i>
        <p style={{ fontSize: 'clamp(16px, 1.5vw, 20px)' }}>Hech qanday mahsulot topilmadi</p>
      </div>
    );
  }

  return (
    <div>
      <div className="product-grid">
        {displayedProducts.map((p) => (
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
      {hasMore && (
        <div style={{ textAlign: 'center', padding: '8px 0 40px' }}>
          <button
            onClick={loadMore}
            style={{
              padding: '10px 32px',
              borderRadius: 60,
              background: 'var(--accent)',
              color: '#fff',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              fontSize: 'clamp(14px, 1.5vw, 16px)',
              boxShadow: '0 4px 20px rgba(56,189,248,0.3)',
              transition: '0.3s',
            }}
          >
            <i className="fas fa-plus-circle" style={{ marginRight: 8 }}></i>
            Yana ko'rsatish {Math.min(pageSize, filtered.length - visibleCount)}
          </button>
        </div>
      )}
    </div>
  );
}