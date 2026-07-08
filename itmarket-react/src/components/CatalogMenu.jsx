// src/components/CatalogMenu.jsx
import { useState } from 'react';
import { categoryLabels } from '../data/products';

export default function CatalogMenu({ setCategory, onClose }) {
  const categories = [
    { key: 'all', label: 'Barchasi', icon: 'fa-th-list' },
    { key: 'laptops', label: '💻 Noutbuklar', icon: 'fa-laptop' },
    { key: 'phones', label: '📱 Telefonlar', icon: 'fa-mobile-alt' },
    { key: 'accessories', label: '🔌 Aksessuarlar', icon: 'fa-plug' },
    { key: 'electronics', label: '⚡ Elektronika', icon: 'fa-microchip' },
    { key: 'favourites', label: '❤️ Sevimlilar', icon: 'fa-heart' },
  ];

  const handleClick = (key) => {
    setCategory(key);
    onClose();
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: 'calc(100% + 8px)',
        left: 0,
        background: 'var(--card-bg)',
        borderRadius: 'var(--radius)',
        boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
        border: '1px solid var(--border)',
        padding: '12px 0',
        minWidth: '220px',
        zIndex: 1000,
        animation: 'slideDown 0.3s ease',
      }}
    >
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      {categories.map((cat) => (
        <button
          key={cat.key}
          onClick={() => handleClick(cat.key)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '8px 20px',
            width: '100%',
            border: 'none',
            background: 'transparent',
            color: 'var(--text)',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
            transition: '0.2s',
            textAlign: 'left',
          }}
          onMouseEnter={(e) => (e.target.style.background = 'var(--input-bg)')}
          onMouseLeave={(e) => (e.target.style.background = 'transparent')}
        >
          <i className={`fas ${cat.icon}`} style={{ width: 20, color: 'var(--accent)' }}></i>
          {cat.label}
        </button>
      ))}
    </div>
  );
}