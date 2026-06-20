export default function Loader({ visible }) {
  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(15, 23, 42, 0.6)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 99999,
      animation: 'fadeIn 0.2s ease'
    }}>
      <img
        src="/verygood.gif"
        alt="Yuklanmoqda..."
        style={{
          width: 80,
          height: 80,
          objectFit: 'contain',
          background: 'transparent',
          mixBlendMode: 'multiply'   // ← bu qator oq fonni yo‘q qiladi
        }}
      />
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}