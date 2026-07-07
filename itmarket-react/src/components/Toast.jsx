// src/components/Toast.jsx
import { useEffect, useState } from 'react';

export default function Toast({ message, type, onHide }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (message) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        setTimeout(onHide, 300);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [message, onHide]);

  if (!show) return null;

  return (
    <div className={`toast show ${type === 'success' ? 'success' : ''}`}>
      <i className={`fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}`}></i>
      <span>{message}</span>
    </div>
  );
}