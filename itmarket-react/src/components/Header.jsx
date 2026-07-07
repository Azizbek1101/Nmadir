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
      <div className="container header-container">
        <a href="#" className="header-logo">
          <i className="fas fa-microchip"></i> IT
          <span style={{ fontWeight: 300, color: 'var(--text)' }}>market</span>
        </a>

        <div className="header-search">
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
          />
        </div>

        <div className="header-actions">
          <button className="theme-btn" onClick={() => setDark(!dark)}>
            <i className={dark ? 'fas fa-moon' : 'far fa-sun'} />
          </button>

          {isRegistered ? (
            <button onClick={onProfileClick}>
              <i className="fas fa-user" />
              <span style={{ fontSize: 13, fontWeight: 600 }}>Profil</span>
            </button>
          ) : (
            <button onClick={onRegisterOpen}>
              <i className="fas fa-user-plus" />
              <span style={{ fontSize: 13, fontWeight: 600 }}>Log in</span>
            </button>
          )}

          <button className="cart-btn" onClick={onCartOpen}>
            <i className="fas fa-cart-shopping" />
            <span style={{ fontSize: 13, fontWeight: 600 }}>Savatcha</span>
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}