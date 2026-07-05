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
        padding: '16px 0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(12px)',
        transition: 'background 0.3s, border 0.3s',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          flexWrap: 'nowrap',
        }}
      >
        <a
          href="#"
          style={{
            fontSize: 26,
            fontWeight: 800,
            color: 'var(--accent)',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            whiteSpace: 'nowrap',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          <i className="fas fa-microchip"></i> IT
          <span style={{ fontWeight: 300, color: 'var(--text)' }}>market</span>
        </a>

        <div
          style={{
            flex: '1 1 auto',
            minWidth: 120,
            maxWidth: 480,
            position: 'relative',
          }}
        >
          <i
            className="fas fa-magnifying-glass"
            style={{
              position: 'absolute',
              left: 14,
              top: '50%',
              transform: 'translateY(-50%)',
              opacity: 0.5,
            }}
          />
          <input
            type="text"
            placeholder="Mahsulotlarni qidiring..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 16px 10px 42px',
              borderRadius: 60,
              background: 'var(--input-bg)',
              border: '2px solid transparent',
              fontSize: 15,
              color: 'var(--text)',
              transition: '0.3s',
            }}
            onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
            onBlur={(e) => (e.target.style.borderColor = 'transparent')}
          />
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            flexShrink: 0,
          }}
        >
          <button
            onClick={() => setDark(!dark)}
            style={{
              width: 44,
              height: 44,
              borderRadius: 60,
              background: 'var(--input-bg)',
              border: 'none',
              fontSize: 18,
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
                padding: '0 16px',
                height: 44,
                borderRadius: 60,
                background: 'var(--input-bg)',
                border: 'none',
                fontSize: 18,
                color: 'var(--text)',
                transition: '0.3s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
                cursor: 'pointer',
              }}
            >
              <i className="fas fa-user" />
              <span style={{ fontSize: 13, fontWeight: 600 }}>Profil</span>
            </button>
          ) : (
            <button
              onClick={onRegisterOpen}
              style={{
                width: 'auto',
                padding: '0 16px',
                height: 44,
                borderRadius: 60,
                background: 'var(--input-bg)',
                border: 'none',
                fontSize: 18,
                color: 'var(--text)',
                transition: '0.3s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
                cursor: 'pointer',
              }}
            >
              <i className="fas fa-user-plus" />
              <span style={{ fontSize: 13, fontWeight: 600 }}>Log in</span>
            </button>
          )}

          <button
            onClick={onCartOpen}
            style={{
              width: 'auto',
              padding: '0 16px',
              height: 44,
              borderRadius: 60,
              background: 'var(--input-bg)',
              border: 'none',
              fontSize: 18,
              color: 'var(--text)',
              transition: '0.3s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              cursor: 'pointer',
              position: 'relative',
            }}
          >
            <i className="fas fa-cart-shopping" />
            <span style={{ fontSize: 13, fontWeight: 600 }}>Savatcha</span>
            {cartCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: -4,
                  right: -4,
                  background: '#ef4444',
                  color: '#fff',
                  fontSize: 11,
                  fontWeight: 700,
                  width: 20,
                  height: 20,
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

      <style>{`
        @media (max-width: 768px) {
          .container {
            gap: 10px !important;
          }
          .container > div:nth-child(2) {
            min-width: 80px !important;
            max-width: 200px !important;
          }
          .container > div:last-child {
            gap: 4px !important;
          }
          .container > div:last-child button {
            padding: 0 10px !important;
            font-size: 14px !important;
          }
          .container > div:last-child button span {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .container > div:nth-child(2) {
            min-width: 60px !important;
            max-width: 140px !important;
          }
          .container > div:last-child button {
            padding: 0 8px !important;
          }
        }
      `}</style>
    </header>
  );
}