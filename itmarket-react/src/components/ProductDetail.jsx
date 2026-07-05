import { products } from '../data/products';

export default function ProductDetail({ isOpen, onClose, productId, onAddToCart, onToast }) {
  if (!isOpen || !productId) return null;

  const product = products.find(p => p.id === productId);
  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product.id);
    onToast("Savatga qo'shildi", "success");
    // onClose(); // xohlasangiz yopib qo‘yishingiz mumkin
  };

  return (
    <div style={{
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
      animation: 'fadeIn 0.3s ease'
    }}>
      <div style={{
        background: 'var(--cart-bg)',
        borderRadius: 'var(--radius)',
        width: '100%',
        maxWidth: 720,
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '32px 28px',
        border: '1px solid var(--border)',
        boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
        animation: 'slideUp 0.35s cubic-bezier(0.22,1,0.36,1)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            onClick={onClose}
            style={{
              width: 40,
              height: 40,
              borderRadius: 60,
              background: 'var(--input-bg)',
              border: 'none',
              fontSize: 20,
              color: 'var(--text)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 20 }}>
          <div style={{
            flex: '0 0 200px',
            height: 200,
            borderRadius: 16,
            background: 'var(--input-bg)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {product.image ? (
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <i className="fas fa-image" style={{ fontSize: 48, opacity: 0.3 }}></i>
            )}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 24, fontWeight: 700 }}>{product.emoji} {product.name}</div>
            <div style={{ fontSize: 14, color: 'var(--accent)', margin: '6px 0 10px' }}>{product.category}</div>
            <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--accent)' }}>
              {new Intl.NumberFormat('uz-UZ').format(product.price)} so'm
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6 }}>
              <span style={{ color: '#f59e0b' }}>
                {'★'.repeat(Math.floor(product.rating || 0))}
                {'☆'.repeat(5 - Math.floor(product.rating || 0))}
              </span>
              <span style={{ opacity: 0.6 }}>({product.rating || 0})</span>
            </div>
            <button
              onClick={handleAddToCart}
              style={{
                marginTop: 16,
                width: '100%',
                padding: 12,
                borderRadius: 60,
                background: 'var(--accent)',
                color: '#fff',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                fontSize: 16,
                boxShadow: '0 4px 20px rgba(56,189,248,0.3)'
              }}
            >
              <i className="fas fa-cart-plus"></i> Savatga qo'shish
            </button>
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>📝 Mahsulot haqida</h3>
          <p style={{ lineHeight: 1.6, opacity: 0.85 }}>{product.description || 'Tavsif mavjud emas.'}</p>
        </div>

        <div>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>💬 Foydalanuvchi sharhlari</h3>
          {product.reviews && product.reviews.length > 0 ? (
            product.reviews.map((review, idx) => (
              <div key={idx} style={{
                background: 'var(--input-bg)',
                padding: '12px 16px',
                borderRadius: 12,
                marginBottom: 10
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong>{review.user}</strong>
                  <span style={{ color: '#f59e0b' }}>
                    {'★'.repeat(Math.floor(review.rating || 0))}
                    {'☆'.repeat(5 - Math.floor(review.rating || 0))}
                  </span>
                </div>
                <p style={{ marginTop: 4, opacity: 0.8 }}>{review.text}</p>
              </div>
            ))
          ) : (
            <p style={{ opacity: 0.5 }}>Hozircha sharhlar mavjud emas.</p>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
      `}</style>
    </div>
  );
}