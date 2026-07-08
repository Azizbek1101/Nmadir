import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { categoryLabels } from '../data/products';

export default function Header({
  search,
  setSearch,
  cartCount,
  onCartOpen,
  onRegisterOpen,
  isRegistered,
  onProfileClick,
  language,
  setLanguage,
}) {
  const { dark, setDark } = useTheme();
  const [catalogOpen, setCatalogOpen] = useState(false);

  const languages = [
    { code: 'uz', label: "O'zbek", flag: '🇺🇿' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
  ];

  const toggleCatalog = () => {
    setCatalogOpen(!catalogOpen);
  };

  const getPlaceholder = () => {
    if (language === 'uz') return 'Mahsulotlarni qidiring...';
    if (language === 'ru') return 'Поиск товаров...';
    return 'Search products...';
  };

  return (
    <header>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        flexWrap: 'nowrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <a href="#" style={{
            fontSize: 'clamp(20px, 4vw, 28px)',
            fontWeight: 800,
            color: 'var(--accent)',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            whiteSpace: 'nowrap',
            textDecoration: 'none',
            flexShrink: 0,
          }}>
            <i className="fas fa-microchip"></i> IT
            <span style={{ fontWeight: 300, color: 'var(--text)' }}>market</span>
          </a>

          <button
            onClick={toggleCatalog}
            style={{
              padding: '6px 14px',
              borderRadius: '30px',
              background: 'var(--accent)',
              color: '#fff',
              border: 'none',
              fontSize: 'clamp(12px, 1.2vw, 14px)',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              whiteSpace: 'nowrap',
            }}
          >
            <i className="fas fa-bars"></i> Katalog
          </button>
        </div>

        <div style={{
          flex: '1 1 auto',
          minWidth: 80,
          maxWidth: 480,
          position: 'relative',
        }}>
          <i className="fas fa-search" style={{
            position: 'absolute',
            left: 12,
            top: '50%',
            transform: 'translateY(-50%)',
            opacity: 0.5,
            fontSize: 'clamp(14px, 2vw, 18px)',
          }} />
          <input
            type="text"
            placeholder={getPlaceholder()}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 12px 8px 34px',
              borderRadius: 60,
              background: 'var(--input-bg)',
              border: '2px solid transparent',
              fontSize: 'clamp(13px, 1.5vw, 15px)',
              color: 'var(--text)',
              transition: '0.3s',
              height: 'clamp(36px, 5vw, 44px)',
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
            onBlur={(e) => e.target.style.borderColor = 'transparent'}
          />
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(4px, 1vw, 8px)',
          flexShrink: 0,
        }}>
          <button
            onClick={() => setDark(!dark)}
            style={{
              width: 'clamp(36px, 5vw, 44px)',
              height: 'clamp(36px, 5vw, 44px)',
              borderRadius: 60,
              background: 'var(--input-bg)',
              border: 'none',
              fontSize: 'clamp(16px, 2vw, 18px)',
              color: 'var(--text)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <i className={dark ? 'fas fa-moon' : 'far fa-sun'} />
          </button>

          {isRegistered ? (
            <button
              onClick={onProfileClick}
              style={{
                padding: '0 clamp(10px, 2vw, 16px)',
                height: 'clamp(36px, 5vw, 44px)',
                borderRadius: 60,
                background: 'var(--input-bg)',
                border: 'none',
                fontSize: 'clamp(16px, 2vw, 18px)',
                color: 'var(--text)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(4px, 1vw, 6px)',
              }}
            >
              <i className="fas fa-user" />
              <span style={{ fontSize: 'clamp(12px, 1.2vw, 13px)', fontWeight: 600 }}>
                {language === 'uz' ? 'Profil' : language === 'ru' ? 'Профиль' : 'Profile'}
              </span>
            </button>
          ) : (
            <button
              onClick={onRegisterOpen}
              style={{
                padding: '0 clamp(10px, 2vw, 16px)',
                height: 'clamp(36px, 5vw, 44px)',
                borderRadius: 60,
                background: 'var(--input-bg)',
                border: 'none',
                fontSize: 'clamp(16px, 2vw, 18px)',
                color: 'var(--text)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(4px, 1vw, 6px)',
              }}
            >
              <i className="fas fa-user-plus" />
              <span style={{ fontSize: 'clamp(12px, 1.2vw, 13px)', fontWeight: 600 }}>
                {language === 'uz' ? 'Kirish' : language === 'ru' ? 'Войти' : 'Log in'}
              </span>
            </button>
          )}

          <button
            onClick={onCartOpen}
            style={{
              padding: '0 clamp(10px, 2vw, 16px)',
              height: 'clamp(36px, 5vw, 44px)',
              borderRadius: 60,
              background: 'var(--input-bg)',
              border: 'none',
              fontSize: 'clamp(16px, 2vw, 18px)',
              color: 'var(--text)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(4px, 1vw, 6px)',
              position: 'relative',
            }}
          >
            <i className="fas fa-cart-shopping" />
            <span style={{ fontSize: 'clamp(12px, 1.2vw, 13px)', fontWeight: 600 }}>
              {language === 'uz' ? 'Savat' : language === 'ru' ? 'Корзина' : 'Cart'}
            </span>
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: -4,
                right: -4,
                background: '#ef4444',
                color: '#fff',
                fontSize: '10px',
                fontWeight: 700,
                width: 18,
                height: 18,
                borderRadius: 60,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid var(--card-bg)',
              }}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {catalogOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'var(--card-bg)',
          borderBottom: '1px solid var(--border)',
          padding: '16px 20px',
          boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
          zIndex: 99,
        }}>
          <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {['laptops', 'phones', 'accessories', 'electronics'].map((cat) => (
              <a
                key={cat}
                href="#"
                style={{
                  padding: '6px 16px',
                  borderRadius: '30px',
                  background: 'var(--input-bg)',
                  color: 'var(--text)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: '0.3s',
                }}
              >
                {categoryLabels[cat]}
              </a>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 600px) {
          .container > div:last-child button span {
            display: none !important;
          }
          .container > div:last-child button {
            padding: 0 10px !important;
          }
        }
        @media (max-width: 430px) {
          .container {
            gap: 6px !important;
          }
          .container > div:nth-child(2) {
            min-width: 60px !important;
            max-width: 120px !important;
          }
        }
      `}</style>
    </header>
  );
}