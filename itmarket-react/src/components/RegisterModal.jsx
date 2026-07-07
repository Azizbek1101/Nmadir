// src/components/RegisterModal.jsx
import { useState } from 'react';

export default function RegisterModal({
  isOpen,
  onClose,
  onToast,
  onShowLoader,
  onRegisterSuccess,
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    if (name && email && password) {
      onShowLoader(1200);
      const userData = { name, email };
      localStorage.setItem('itmarket_user', JSON.stringify(userData));
      if (!localStorage.getItem('itmarket_bonus')) {
        localStorage.setItem('itmarket_bonus', '1500');
      }
      if (!localStorage.getItem('itmarket_promos')) {
        localStorage.setItem('itmarket_promos', JSON.stringify(['WELCOME10', 'SUMMER20']));
      }
      if (!localStorage.getItem('itmarket_orders')) {
        localStorage.setItem(
          'itmarket_orders',
          JSON.stringify([
            { id: 1, date: '2026-06-20', total: 18990000, status: 'Yetkazilgan' },
          ])
        );
      }
      setSuccess(true);
      onToast("Ro'yxatdan o'tish muvaffaqiyatli!", 'success');
      onRegisterSuccess();
    } else {
      onToast("Iltimos, barcha maydonlarni to'ldiring", 'error');
    }
  };

  const handleClose = () => {
    setSuccess(false);
    setName('');
    setEmail('');
    setPassword('');
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
          maxWidth: 480,
          padding: 'clamp(24px, 4vw, 32px)',
          border: '1px solid var(--border)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
          animation: 'slideUp 0.35s cubic-bezier(0.22,1,0.36,1)',
          maxHeight: '95vh',
          overflowY: 'auto',
        }}
      >
        {!success ? (
          <>
            <h2
              style={{
                fontSize: 'clamp(20px, 3vw, 24px)',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <i className="fas fa-user-plus" style={{ color: 'var(--accent)' }}></i> Ro‘yxatdan o‘tish
            </h2>
            <p style={{ opacity: 0.6, fontSize: 'clamp(13px, 1.4vw, 14px)', marginBottom: 20 }}>
              ITmarket do‘koniga xush kelibsiz!
            </p>
            <form onSubmit={handleRegister}>
              <div style={{ marginBottom: 14 }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: 'clamp(12px, 1.2vw, 13px)',
                    fontWeight: 600,
                    marginBottom: 4,
                    opacity: 0.8,
                  }}
                >
                  Ism va familiya
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masalan: Alisher Karimov"
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: 12,
                    background: 'var(--input-bg)',
                    border: '2px solid var(--border)',
                    fontSize: 'clamp(14px, 1.4vw, 15px)',
                    color: 'var(--text)',
                  }}
                  required
                />
              </div>
              <div style={{ marginBottom: 14 }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: 'clamp(12px, 1.2vw, 13px)',
                    fontWeight: 600,
                    marginBottom: 4,
                    opacity: 0.8,
                  }}
                >
                  Elektron pochta
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alisher@example.com"
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: 12,
                    background: 'var(--input-bg)',
                    border: '2px solid var(--border)',
                    fontSize: 'clamp(14px, 1.4vw, 15px)',
                    color: 'var(--text)',
                  }}
                  required
                />
              </div>
              <div style={{ marginBottom: 20 }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: 'clamp(12px, 1.2vw, 13px)',
                    fontWeight: 600,
                    marginBottom: 4,
                    opacity: 0.8,
                  }}
                >
                  Parol
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="●●●●●●●●"
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: 12,
                    background: 'var(--input-bg)',
                    border: '2px solid var(--border)',
                    fontSize: 'clamp(14px, 1.4vw, 15px)',
                    color: 'var(--text)',
                  }}
                  required
                />
              </div>
              <button
                type="submit"
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
                  transition: '0.3s',
                }}
              >
                <i className="fas fa-check"></i> Ro‘yxatdan o‘tish
              </button>
            </form>
            <button
              onClick={handleClose}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: 60,
                background: 'var(--input-bg)',
                color: 'var(--text)',
                fontSize: 'clamp(14px, 1.4vw, 15px)',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                marginTop: 10,
                transition: '0.3s',
              }}
            >
              <i className="fas fa-times"></i> Yopish
            </button>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: 'clamp(16px, 3vw, 24px) 0' }}>
            <i
              className="fas fa-check-circle"
              style={{ fontSize: 'clamp(44px, 6vw, 56px)', color: '#10b981', marginBottom: 12 }}
            ></i>
            <p style={{ fontSize: 'clamp(14px, 1.5vw, 16px)' }}>
              <strong>Tabriklaymiz!</strong>
              <br />
              Siz muvaffaqiyatli ro‘yxatdan o‘tdingiz.
            </p>
            <button
              onClick={handleClose}
              style={{
                marginTop: 20,
                width: '100%',
                padding: '10px',
                borderRadius: 60,
                background: 'var(--input-bg)',
                color: 'var(--text)',
                fontSize: 'clamp(14px, 1.4vw, 15px)',
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