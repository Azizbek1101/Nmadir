import { categoryLabels } from '../data/products';

export default function CategoryBar({ current, setCategory, onShowLoader }) {
  const categories = ['all', 'laptops', 'phones', 'accessories', 'electronics', 'favourites'];

  const handleClick = (cat) => {
    setCategory(cat);
    onShowLoader(800);
  };

  return (
    <nav style={{
      padding: '20px 0 8px',
      overflowX: 'auto',
      display: 'flex',
      gap: 10,
      flexWrap: 'nowrap',
      scrollbarWidth: 'none',
      WebkitOverflowScrolling: 'touch'
    }}>
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          style={{
            padding: '8px 22px',
            borderRadius: 60,
            fontSize: 14,
            fontWeight: 600,
            background: current === cat ? 'var(--accent)' : 'var(--card-bg)',
            color: current === cat ? '#fff' : 'var(--text)',
            border: `2px solid ${current === cat ? 'var(--accent)' : 'var(--border)'}`,
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            transition: '0.3s',
            boxShadow: current === cat ? '0 4px 16px rgba(56,189,248,0.35)' : 'none'
          }}
        >
          {categoryLabels[cat] || cat}
        </button>
      ))}
    </nav>
  );
}