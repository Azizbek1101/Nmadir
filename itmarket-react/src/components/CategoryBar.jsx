import { categoryLabels } from '../data/products';

export default function CategoryBar({ current, setCategory, onShowLoader }) {
  const categories = ['all', 'laptops', 'phones', 'accessories', 'electronics', 'favourites'];

  const handleClick = (cat) => {
    setCategory(cat);
    onShowLoader(800);
  };

  return (
    <nav className="category-bar">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={current === cat ? 'active' : ''}
        >
          {categoryLabels[cat] || cat}
        </button>
      ))}
    </nav>
  );
}