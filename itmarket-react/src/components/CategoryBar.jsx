// src/components/CategoryBar.jsx
import { categoryLabels } from '../data/products';

export default function CategoryBar({ current, setCategory, onShowLoader }) {
  const categories = ['all', 'laptops', 'phones', 'accessories', 'electronics', 'favourites'];

  const handleClick = (cat) => {
    setCategory(cat);
    onShowLoader(800);
  };

  return (
    <nav className="category-bar" style={{
      padding: '16px 0 8px',
      overflowX: 'auto',
      display: 'flex',
      gap: 'clamp(6px, 1.5vw, 12px)',
      flexWrap: 'nowrap',
      scrollbarWidth: 'none',
      WebkitOverflowScrolling: 'touch',
      msOverflowStyle: 'none',
    }}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          style={{
            padding: '8px clamp(14px, 3vw, 24px)',
            borderRadius: 60,
            fontSize: 'clamp(13px, 1.4vw, 15px)',
            fontWeight: 600,
            background: current === cat ? 'var(--accent)' : 'var(--card-bg)',
            color: current === cat ? '#fff' : 'var(--text)',
            border: `2px solid ${current === cat ? 'var(--accent)' : 'var(--border)'}`,
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            transition: '0.3s',
            boxShadow: current === cat ? '0 4px 16px rgba(56,189,248,0.35)' : 'none',
            flexShrink: 0,
          }}
        >
          {categoryLabels[cat] || cat}
        </button>
      ))}
    </nav>
  );
}