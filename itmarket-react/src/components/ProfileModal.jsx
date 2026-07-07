// src/components/ProfileModal.jsx
import { useState, useEffect } from 'react';

export default function ProfileModal({ isOpen, onClose, onLogout }) {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [bonus, setBonus] = useState(0);
  const [promoCodes, setPromoCodes] = useState([]);

  useEffect(() => {
    if (isOpen) {
      const savedUser = localStorage.getItem('itmarket_user');
      if (savedUser) setUser(JSON.parse(savedUser));

      const savedOrders = localStorage.getItem('itmarket_orders');
      if (savedOrders) {
        setOrders(JSON.parse(savedOrders));
      } else {
        setOrders([
          { id: 1, date: '2026-06-20', total: 18990000, status: 'Yetkazilgan' },
          { id: 2, date: '2026-06-25', total: 8490000, status: 'Tayyorlanmoqda' },
        ]);
      }

      const savedBonus = localStorage.getItem('itmarket_bonus');
      setBonus(savedBonus ? Number(savedBonus) : 1250);

      const savedPromos = localStorage.getItem('itmarket_promos');
      setPromoCodes(savedPromos ? JSON.parse(savedPromos) : ['WELCOME10', 'SUMMER20', 'BONUS50']);
    }
  }, [isOpen]);

  const handleLogout = () => {
    if (onLogout) onLogout();
    onClose();
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
        padding: 'clamp(12px, 3vw, 20px)',
        animation: 'fadeIn 0.3s ease',
      }}
    >
      <div
        style={{
          background: 'var(--cart-bg)',
          borderRadius: 'var(--radius)',
          width: '100%',
          maxWidth: 560,
          maxHeight: '95vh',
          overflowY: 'auto',
          padding: 'clamp(20px, 4vw, 32px)',
          border: '1px solid var(--border)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
          animation: 'slideUp 0.35s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(20px, 3vw, 24px)',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <i className="fas fa-user-circle" style={{ color: 'var(--accent)' }}></i>
            Mening profilim
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

        {user ? (
          <>
            <div
              style={{
                background: 'var(--input-bg)',
                borderRadius: 16,
                padding: 'clamp(14px, 2vw, 18px)',
                marginBottom: 20,
                border: '1px solid var(--border)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(12px, 2vw, 16px)' }}>
                <div
                  style={{
                    width: 'clamp(48px, 6vw, 60px)',
                    height: 'clamp(48px, 6vw, 60px)',
                    borderRadius: 60,
                    background: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'clamp(22px, 3vw, 28px)',
                    color: '#fff',
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                </div>
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 'clamp(18px, 2.2vw, 20px)',
                      fontWeight: 700,
                      wordBreak: 'break-word',
                    }}
                  >
                    {user.name || 'Foydalanuvchi'}
                  </div>
                  <div style={{ opacity: 0.6, fontSize: 'clamp(13px, 1.3vw, 14px)', wordBreak: 'break-word' }}>
                    {user.email || 'email@example.com'}
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'clamp(12px, 2vw, 16px)',
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  background: 'var(--input-bg)',
                  borderRadius: 16,
                  padding: 'clamp(12px, 1.5vw, 16px)',
                  border: '1px solid var(--border)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(22px, 3vw, 28px)',
                    fontWeight: 800,
                    color: 'var(--accent)',
                  }}
                >
                  {bonus}
                </div>
                <div style={{ fontSize: 'clamp(12px, 1.2vw, 13px)', opacity: 0.6 }}>
                  🎁 Bonus ballari
                </div>
              </div>
              <div
                style={{
                  background: 'var(--input-bg)',
                  borderRadius: 16,
                  padding: 'clamp(12px, 1.5vw, 16px)',
                  border: '1px solid var(--border)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(22px, 3vw, 28px)',
                    fontWeight: 800,
                    color: '#f59e0b',
                  }}
                >
                  {promoCodes.length}
                </div>
                <div style={{ fontSize: 'clamp(12px, 1.2vw, 13px)', opacity: 0.6 }}>
                  🏷️ Faol promo kodlar
                </div>
              </div>
            </div>

            {promoCodes.length > 0 && (
              <div style={{ marginBottom: 20 }}>
                <h3
                  style={{
                    fontSize: 'clamp(14px, 1.5vw, 16px)',
                    fontWeight: 600,
                    marginBottom: 8,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <i className="fas fa-tags" style={{ color: 'var(--accent)' }}></i> Mening promo kodlarim
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {promoCodes.map((code, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: 'rgba(56,189,248,0.15)',
                        color: 'var(--accent)',
                        padding: '4px 14px',
                        borderRadius: 60,
                        fontSize: 'clamp(12px, 1.2vw, 13px)',
                        fontWeight: 600,
                        border: '1px dashed var(--accent)',
                      }}
                    >
                      {code}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div style={{ marginBottom: 20 }}>
              <h3
                style={{
                  fontSize: 'clamp(14px, 1.5vw, 16px)',
                  fontWeight: 600,
                  marginBottom: 8,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <i className="fas fa-box" style={{ color: 'var(--accent)' }}></i> So‘nggi buyurtmalar
              </h3>
              {orders.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      style={{
                        background: 'var(--input-bg)',
                        borderRadius: 12,
                        padding: '10px 14px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        border: '1px solid var(--border)',
                        flexWrap: 'wrap',
                        gap: 4,
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontWeight: 600,
                            fontSize: 'clamp(13px, 1.3vw, 14px)',
                          }}
                        >
                          #{order.id} – {new Date(order.date).toLocaleDateString('uz-UZ')}
                        </div>
                        <div style={{ fontSize: 'clamp(12px, 1.2vw, 13px)', opacity: 0.6 }}>
                          {order.status}
                        </div>
                      </div>
                      <div
                        style={{
                          fontWeight: 700,
                          color: 'var(--accent)',
                          fontSize: 'clamp(13px, 1.3vw, 14px)',
                        }}
                      >
                        {new Intl.NumberFormat('uz-UZ').format(order.total)} so‘m
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ opacity: 0.5, fontSize: 'clamp(13px, 1.3vw, 14px)' }}>
                  Hali buyurtmalar yo‘q
                </p>
              )}
            </div>

            <button
              onClick={handleLogout}
              style={{
                width: '100%',
                padding: 'clamp(10px, 1.2vw, 12px)',
                borderRadius: 60,
                background: '#ef4444',
                color: '#fff',
                fontSize: 'clamp(14px, 1.4vw, 16px)',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                transition: '0.3s',
              }}
            >
              <i className="fas fa-sign-out-alt"></i> Chiqish
            </button>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: 'clamp(20px, 4vw, 30px) 0' }}>
            <i
              className="fas fa-user-slash"
              style={{ fontSize: 'clamp(40px, 6vw, 48px)', opacity: 0.3, display: 'block', marginBottom: 12 }}
            ></i>
            <p style={{ fontSize: 'clamp(14px, 1.5vw, 16px)' }}>Foydalanuvchi maʼlumotlari topilmadi.</p>
            <button
              onClick={onClose}
              style={{
                marginTop: 16,
                padding: '8px 20px',
                borderRadius: 60,
                background: 'var(--accent)',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                fontSize: 'clamp(14px, 1.4vw, 15px)',
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