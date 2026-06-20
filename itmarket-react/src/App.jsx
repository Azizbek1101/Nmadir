import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import CategoryBar from './components/CategoryBar';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import RegisterModal from './components/RegisterModal';
import Toast from './components/Toast';
import Loader from './components/Loader';

function App() {
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('itmarket_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [favourites, setFavourites] = useState(() => {
    const saved = localStorage.getItem('itmarket_favourites');
    return saved ? JSON.parse(saved) : [];
  });
  const [cartOpen, setCartOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [toast, setToast] = useState({ message: '', type: '' });
  const [loaderVisible, setLoaderVisible] = useState(false);

  const showToast = (msg, type = 'info') => {
    setToast({ message: msg, type });
    setTimeout(() => setToast({ message: '', type: '' }), 3000);
  };

  const showLoader = (duration = 1500) => {
    setLoaderVisible(true);
    setTimeout(() => setLoaderVisible(false), duration);
  };

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  const toggleFavourite = (id) => {
    setFavourites(prev => {
      const newFav = prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id];
      localStorage.setItem('itmarket_favourites', JSON.stringify(newFav));
      return newFav;
    });
    const inFav = favourites.includes(id);
    showToast(inFav ? "Sevimlilardan olib tashlandi" : "Sevimlilarga qo'shildi", "info");
  };

  return (
    <ThemeProvider>
      <Header
        search={search}
        setSearch={setSearch}
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
        onRegisterOpen={() => setRegisterOpen(true)}
      />
      <div className="container">
        <CategoryBar
          current={category}
          setCategory={setCategory}
          onShowLoader={showLoader}
        />
        <ProductGrid
          category={category}
          search={search}
          cart={cart}
          favourites={favourites}
          onToggleCart={(id) => {
            const existing = cart.find(item => item.id === id);
            if (existing) {
              setCart(prev => {
                const newCart = prev.filter(item => item.id !== id);
                localStorage.setItem('itmarket_cart', JSON.stringify(newCart));
                return newCart;
              });
              showToast('Mahsulot olib tashlandi', 'info');
            } else {
              setCart(prev => {
                const newCart = [...prev, { id, qty: 1 }];
                localStorage.setItem('itmarket_cart', JSON.stringify(newCart));
                return newCart;
              });
              showToast('Savatga qo\'shildi', 'success');
            }
          }}
          onToggleFavourite={toggleFavourite}
        />
      </div>

      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        setCart={setCart}
        onToast={showToast}
        onShowLoader={showLoader}
      />

      <RegisterModal
        isOpen={registerOpen}
        onClose={() => setRegisterOpen(false)}
        onToast={showToast}
        onShowLoader={showLoader}
      />

      {toast.message && (
        <Toast
          message={toast.message}
          type={toast.type}
          onHide={() => setToast({ message: '', type: '' })}
        />
      )}

      <Loader visible={loaderVisible} />
    </ThemeProvider>
  );
}

export default App;