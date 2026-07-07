// src/components/Cart.jsx
import { products } from '../data/products';

export default function Cart({ isOpen, onClose, cart, setCart, onToast, onShowLoader }) {
  const total = cart.reduce((sum, item) => {
    const p = products.find((x) => x.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);

  const updateQty = (id, delta) => {
    setCart((prev) => {
      const newCart = prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            if (newQty <= 0) return null;
            return { ...item, qty: newQty };
          }
          return item;
        })
        .filter(Boolean);
      localStorage.setItem('itmarket_cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const removeItem = (id) => {
    setCart((prev) => {
      const newCart = prev.filter((item) => item.id !== id);
      localStorage.setItem('itmarket_cart', JSON.stringify(newCart));
      return newCart;
    });
    onToast('Mahsulot olib tashlandi', 'info');
  };

  const handleCheckout = () => {
    onShowLoader(1200);
    onToast('Buyurtma qabul qilindi!', 'success');
    setTimeout(() => onClose(), 1500);
  };

  if (!isOpen) return null;

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
        padding: 'clamp(12px, 3vw, 24px)',
        animation: 'fadeIn 0.3s ease',
      }}
    >
      <div
        style={{
          background: 'var(--cart-bg)',
          borderRadius: 'var(--radius)',
          width: '100%',
          maxWidth: 720,
          maxHeight: '95vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
          border: '1px solid var(--border)',
          animation: 'slideUp 0.35s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        <div
          style={{
            padding: 'clamp(16px, 2.5vw, 24px)',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexShrink: 0,
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(18px, 2.5vw, 22px)',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <i className="fas fa-shopping-bag" style={{ color: 'var(--accent)' }}></i> Savatcha
          </h2>
          <button
            onClick={onClose}
            style={{
              width: 'clamp(36px, 5vw, 40px)',
              height: 'clamp(36px, 5vw, 40px)',
              borderRadius: 60,
              background: 'var(--input-bg)',
              border: 'none',
              fontSize: 'clamp(18px, 2vw, 20px)',
              color: 'var(--text)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: 'clamp(12px, 2vw, 24px)',
          }}
        >
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: 'clamp(30px, 6vw, 60px) 0', opacity: 0.6 }}>
              <i
                className="fas fa-shopping-bag"
                style={{
                  fontSize: 'clamp(40px, 6vw, 56px)',
                  opacity: 0.3,
                  display: 'block',
                  marginBottom: 12,
                }}
              ></i>
              <p style={{ fontSize: 'clamp(14px, 1.5vw, 16px)' }}>Savat hozircha bo‘sh</p>
            </div>
          ) : (
            cart.map((item) => {
              const p = products.find((x) => x.id === item.id);
              if (!p) return null;
              return (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'clamp(12px, 2vw, 16px)',
                    padding: '10px 0',
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  <div
                    style={{
                      width: 'clamp(44px, 6vw, 56px)',
                      height: 'clamp(44px, 6vw, 56px)',
                      borderRadius: 12,
                      background: 'var(--input-bg)',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 'clamp(18px, 2.5vw, 22px)',
                      overflow: 'hidden',
                    }}
                  >
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      <i className="fas fa-image" style={{ opacity: 0.3 }}></i>
                    )}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: 'clamp(13px, 1.4vw, 15px)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {p.emoji} {p.name}
                    </div>
                    <div
                      style={{
                        fontSize: 'clamp(12px, 1.2vw, 14px)',
                        color: 'var(--accent)',
                        fontWeight: 700,
                      }}
                    >
                      {new Intl.NumberFormat('uz-UZ').format(p.price)} so‘m
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <button
                      onClick={() => updateQty(item.id, -1)}
                      style={{
                        width: 'clamp(28px, 3.5vw, 30px)',
                        height: 'clamp(28px, 3.5vw, 30px)',
                        borderRadius: 60,
                        background: 'var(--input-bg)',
                        border: 'none',
                        fontSize: 'clamp(14px, 1.5vw, 16px)',
                        fontWeight: 700,
                        cursor: 'pointer',
                      }}
                    >
                      −
                    </button>
                    <span
                      style={{
                        fontWeight: 700,
                        minWidth: 20,
                        textAlign: 'center',
                        fontSize: 'clamp(14px, 1.5vw, 16px)',
                      }}
                    >
                      {item.qty}
                    </span>
                    <button
                      onClick={() => updateQty(item.id, 1)}
                      style={{
                        width: 'clamp(28px, 3.5vw, 30px)',
                        height: 'clamp(28px, 3.5vw, 30px)',
                        borderRadius: 60,
                        background: 'var(--input-bg)',
                        border: 'none',
                        fontSize: 'clamp(14px, 1.5vw, 16px)',
                        fontWeight: 700,
                        cursor: 'pointer',
                      }}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    style={{
                      color: '#ef4444',
                      fontSize: 'clamp(16px, 1.8vw, 18px)',
                      padding: 6,
                      borderRadius: 60,
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      opacity: 0.6,
                    }}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
              );
            })
          )}
        </div>

        <div
          style={{
            padding: 'clamp(12px, 2vw, 24px)',
            borderTop: '1px solid var(--border)',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: 'clamp(16px, 2vw, 20px)',
              fontWeight: 700,
              marginBottom: 14,
            }}
          >
            <span>Jami:</span>
            <span style={{ color: 'var(--accent)' }}>
              {new Intl.NumberFormat('uz-UZ').format(total)} so‘m
            </span>
          </div>
          <button
            onClick={handleCheckout}
            style={{
              width: '100%',
              padding: 'clamp(12px, 1.5vw, 14px)',
              borderRadius: 60,
              background: 'var(--accent)',
              color: '#fff',
              fontSize: 'clamp(15px, 1.6vw, 17px)',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(56,189,248,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              transition: '0.3s',
            }}
          >
            <i className="fas fa-credit-card"></i> Buyurtma berish
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
      `}</style>
    </div>
  );
}
