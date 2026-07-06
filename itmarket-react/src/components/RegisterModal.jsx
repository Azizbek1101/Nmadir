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
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    if (name && email && password) {
      onShowLoader(1200);
      const userData = { name, email };
      setSuccess(true);
      onToast("Ro'yxatdan o'tish muvaffaqiyatli!", "success");
      onRegisterSuccess(userData); // App ga yuboramiz
    } else {
      onToast("Iltimos, barcha maydonlarni to'ldiring", "error");
    }
  };

  const handleClose = () => {
    setSuccess(false);
    setName('');
    setEmail('');
    setPassword('');
    setPasswordVisible(false);
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
        }}
      >
        {!success ? (
          <>
            <h2 style={{ fontSize: 24, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 10 }}>
              <i className="fas fa-user-plus" style={{ color: 'var(--accent)' }}></i> Ro'yxatdan o'tish
            </h2>
            <p style={{ opacity: 0.6, fontSize: 14, marginBottom: 24 }}>
              ITmarket do'koniga xush kelibsiz!
            </p>
            <form onSubmit={handleRegister}>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 5, opacity: 0.8 }}>
                  Ism va familiya
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masalan: Alisher Karimov"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 12,
                    background: 'var(--input-bg)',
                    border: '2px solid var(--border)',
                    fontSize: 15,
                    color: 'var(--text)',
                  }}
                  required
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 5, opacity: 0.8 }}>
                  Elektron pochta
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alisher@example.com"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 12,
                    background: 'var(--input-bg)',
                    border: '2px solid var(--border)',
                    fontSize: 15,
                    color: 'var(--text)',
                  }}
                  required
                />
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 5, opacity: 0.8 }}>
                  Parol
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={passwordVisible ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="●●●●●●●●"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      paddingRight: '44px',
                      borderRadius: 12,
                      background: 'var(--input-bg)',
                      border: '2px solid var(--border)',
                      fontSize: 15,
                      color: 'var(--text)',
                    }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    style={{
                      position: 'absolute',
                      right: 12,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      color: 'var(--text)',
                      opacity: 0.6,
                      fontSize: 18,
                    }}
                  >
                    <i className={passwordVisible ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
                  </button>
                </div>
              </div>
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: 14,
                  borderRadius: 60,
                  background: 'var(--accent)',
                  color: '#fff',
                  fontSize: 17,
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(56,189,248,0.3)',
                  transition: '0.3s',
                }}
              >
                <i className="fas fa-check"></i> Ro'yxatdan o'tish
              </button>
            </form>
            <button
              onClick={handleClose}
              style={{
                width: '100%',
                padding: 12,
                borderRadius: 60,
                background: 'var(--input-bg)',
                color: 'var(--text)',
                fontSize: 15,
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                marginTop: 12,
                transition: '0.3s',
              }}
            >
              <i className="fas fa-times"></i> Yopish
            </button>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <i className="fas fa-check-circle" style={{ fontSize: 56, color: '#10b981', marginBottom: 12 }}></i>
            <p>
              <strong>Tabriklaymiz!</strong>
              <br />
              Siz muvaffaqiyatli ro'yxatdan o'tdingiz.
            </p>
            <button
              onClick={handleClose}
              style={{
                marginTop: 20,
                width: '100%',
                padding: 12,
                borderRadius: 60,
                background: 'var(--input-bg)',
                color: 'var(--text)',
                fontSize: 15,
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