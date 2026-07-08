import { categoryLabels } from '../data/products';

export default function CategoryBar({ current, setCategory, onShowLoader, language }) {
  const categories = ['all', 'laptops', 'phones', 'accessories', 'electronics', 'favourites'];

  const handleClick = (cat) => {
    setCategory(cat);
    onShowLoader(800);
  };

  const getLabel = (cat) => {
    if (language === 'uz') return categoryLabels[cat] || cat;
    if (language === 'ru') {
      const map = {
        all: 'Все',
        laptops: '💻 Ноутбуки',
        phones: '📱 Телефоны',
        accessories: '🔌 Аксессуары',
        electronics: '⚡ Электроника',
        favourites: '❤️ Избранное',
      };
      return map[cat] || cat;
    }
    const map = {
      all: 'All',
      laptops: '💻 Laptops',
      phones: '📱 Phones',
      accessories: '🔌 Accessories',
      electronics: '⚡ Electronics',
      favourites: '❤️ Favorites',
    };
    return map[cat] || cat;
  };

  return (
    <nav
      className="category-bar"
      style={{
        padding: '10px 0 4px',
        display: 'flex',
        gap: '8px',
        overflowX: 'auto',
        flexWrap: 'nowrap',
        scrollbarWidth: 'none',
        WebkitOverflowScrolling: 'touch',
        position: 'relative',
      }}
    >
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          style={{
            padding: '6px 16px',
            borderRadius: '30px',
            fontSize: '13px',
            fontWeight: 600,
            background: current === cat ? 'var(--accent)' : 'var(--card-bg)',
            color: current === cat ? '#fff' : 'var(--text)',
            border: `2px solid ${current === cat ? 'var(--accent)' : 'var(--border)'}`,
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            transition: '0.3s',
            boxShadow: current === cat ? '0 4px 12px rgba(56,189,248,0.3)' : 'none',
            flexShrink: 0,
            transform: current === cat ? 'scale(1.05)' : 'scale(1)',
          }}
        >
          {getLabel(cat)}
        </button>
      ))}
    </nav>
  );
}