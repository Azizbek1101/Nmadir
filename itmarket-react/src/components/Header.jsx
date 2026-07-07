// src/components/Header.jsx
import { useTheme } from '../context/ThemeContext';

export default function Header({
  search,
  setSearch,
  cartCount,
  onCartOpen,
  onRegisterOpen,
  isRegistered,
  onProfileClick,
}) {
  const { dark, setDark } = useTheme();

  return (
    <header
      style={{
        background: 'var(--card-bg)',
        borderBottom: '1px solid var(--border)',
        padding: '12px 0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(12px)',
        transition: 'background 0.3s, border 0.3s',
        minHeight: 'var(--header-height)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
          flexWrap: 'nowrap',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontSize: 'clamp(20px, 4vw, 26px)',
            fontWeight: 800,
            color: 'var(--accent)',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            whiteSpace: 'nowrap',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          <i className="fas fa-microchip"></i> IT
          <span style={{ fontWeight: 300, color: 'var(--text)' }}>market</span>
        </a>

        {/* Qidiruv maydoni */}
        <div
          style={{
            flex: '1 1 auto',
            minWidth: 80,
            maxWidth: 480,
            position: 'relative',
          }}
        >
          <i
            className="fas fa-magnifying-glass"
            style={{
              position: 'absolute',
              left: 12,
              top: '50%',
              transform: 'translateY(-50%)',
              opacity: 0.5,
              fontSize: 'clamp(14px, 2vw, 18px)',
            }}
          />
          <input
            type="text"
            placeholder="Qidirish..."
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
            onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
            onBlur={(e) => (e.target.style.borderColor = 'transparent')}
          />
        </div>

        {/* Tugmalar guruhi */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(4px, 1vw, 8px)',
            flexShrink: 0,
          }}
        >
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
              transition: '0.3s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <i className={dark ? 'fas fa-moon' : 'far fa-sun'} />
          </button>

          {isRegistered ? (
            <button
              onClick={onProfileClick}
              style={{
                width: 'auto',
                padding: '0 clamp(10px, 2vw, 16px)',
                height: 'clamp(36px, 5vw, 44px)',
                borderRadius: 60,
                background: 'var(--input-bg)',
                border: 'none',
                fontSize: 'clamp(16px, 2vw, 18px)',
                color: 'var(--text)',
                transition: '0.3s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'clamp(4px, 1vw, 6px)',
                cursor: 'pointer',
              }}
            >
              <i className="fas fa-user" />
              <span style={{ fontSize: 'clamp(12px, 1.2vw, 13px)', fontWeight: 600 }}>
                Profil
              </span>
            </button>
          ) : (
            <button
              onClick={onRegisterOpen}
              style={{
                width: 'auto',
                padding: '0 clamp(10px, 2vw, 16px)',
                height: 'clamp(36px, 5vw, 44px)',
                borderRadius: 60,
                background: 'var(--input-bg)',
                border: 'none',
                fontSize: 'clamp(16px, 2vw, 18px)',
                color: 'var(--text)',
                transition: '0.3s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'clamp(4px, 1vw, 6px)',
                cursor: 'pointer',
              }}
            >
              <i className="fas fa-user-plus" />
              <span style={{ fontSize: 'clamp(12px, 1.2vw, 13px)', fontWeight: 600 }}>
                Log in
              </span>
            </button>
          )}

          <button
            onClick={onCartOpen}
            style={{
              width: 'auto',
              padding: '0 clamp(10px, 2vw, 16px)',
              height: 'clamp(36px, 5vw, 44px)',
              borderRadius: 60,
              background: 'var(--input-bg)',
              border: 'none',
              fontSize: 'clamp(16px, 2vw, 18px)',
              color: 'var(--text)',
              transition: '0.3s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(4px, 1vw, 6px)',
              cursor: 'pointer',
              position: 'relative',
            }}
          >
            <i className="fas fa-cart-shopping" />
            <span style={{ fontSize: 'clamp(12px, 1.2vw, 13px)', fontWeight: 600 }}>
              Savatcha
            </span>
            {cartCount > 0 && (
              <span
                style={{
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
                }}
              >
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Kichik ekranlarda so‘zlarni yashirish */}
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