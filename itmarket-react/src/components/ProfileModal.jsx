import { products } from '../data/products';

export default function ProfileModal({ isOpen, onClose, onLogout, user, cart }) {
  if (!isOpen) return null;

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'var(--overlay)',
        backdropFilter: 'blur(6px)',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        animation: 'fadeIn 0.3s ease',
      }}
    >
      <div
        style={{
          background: 'var(--cart-bg)',
          borderRadius: 'var(--radius)',
          width: '100%',
          maxWidth: 480,
          padding: '32px 28px',
          border: '1px solid var(--border)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
          animation: 'slideUp 0.35s cubic-bezier(0.22,1,0.36,1)',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        <h2 style={{ fontSize: 24, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <i className="fas fa-user" style={{ color: 'var(--accent)' }}></i> Profil
        </h2>

        {user ? (
          <>
            <div style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 14, opacity: 0.6, marginBottom: 2 }}>Ism</p>
              <p style={{ fontSize: 18, fontWeight: 600 }}>{user.name}</p>
            </div>
            <div style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 14, opacity: 0.6, marginBottom: 2 }}>Email</p>
              <p style={{ fontSize: 18, fontWeight: 600 }}>{user.email}</p>
            </div>

            <hr style={{ borderColor: 'var(--border)', margin: '16px 0' }} />

            <div style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 14, opacity: 0.6, marginBottom: 2 }}>
                <i className="fas fa-shopping-bag" style={{ marginRight: 6 }}></i> Savatcha
              </p>
              <p style={{ fontSize: 18, fontWeight: 600 }}>
                {totalItems} ta mahsulot ({new Intl.NumberFormat('uz-UZ').format(totalPrice)} so'm)
              </p>
            </div>

            <div style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 14, opacity: 0.6, marginBottom: 2 }}>
                <i className="fas fa-ticket-alt" style={{ marginRight: 6 }}></i> Promokodlar
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <span style={{ background: 'var(--input-bg)', padding: '4px 12px', borderRadius: 60, fontSize: 14, fontWeight: 600, border: '1px solid var(--border)' }}>
                  WELCOME10
                </span>
                <span style={{ background: 'var(--input-bg)', padding: '4px 12px', borderRadius: 60, fontSize: 14, fontWeight: 600, border: '1px solid var(--border)' }}>
                  SUMMER20
                </span>
              </div>
            </div>

            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 14, opacity: 0.6, marginBottom: 2 }}>
                <i className="fas fa-coins" style={{ marginRight: 6 }}></i> Bonus ballari
              </p>
              <p style={{ fontSize: 18, fontWeight: 600, color: 'var(--accent)' }}>
                1500 ball
              </p>
            </div>

            <button
              onClick={onLogout}
              style={{
                width: '100%',
                padding: 14,
                borderRadius: 60,
                background: '#ef4444',
                color: '#fff',
                fontSize: 17,
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(239,68,68,0.3)',
                transition: '0.3s',
                marginBottom: 12,
              }}
            >
              <i className="fas fa-sign-out-alt"></i> Chiqish
            </button>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <i className="fas fa-user-slash" style={{ fontSize: 48, opacity: 0.3, marginBottom: 12 }}></i>
            <p style={{ fontSize: 16, opacity: 0.7 }}>Siz hali ro'yxatdan o'tmagansiz.</p>
            <p style={{ fontSize: 14, opacity: 0.5, marginTop: 4 }}>Iltimos, avval ro'yxatdan o'ting.</p>
            <button
              onClick={onClose}
              style={{
                marginTop: 20,
                padding: '10px 30px',
                borderRadius: 60,
                background: 'var(--accent)',
                color: '#fff',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Yopish
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
      `}</style>
    </div>
  );
}