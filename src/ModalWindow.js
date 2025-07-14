import React, { useState, useCallback, useEffect } from 'react';
import './ModalWindow.css';

const ModalWindow = ({ show, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      document.addEventListener('keydown', handleKeyDown);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 800);
      document.removeEventListener('keydown', handleKeyDown);
      return () => clearTimeout(timer);
    }
  }, [show, handleKeyDown]);

  useEffect(() => {
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [handleKeyDown]);

  return (
    <div className={`modal-backdrop ${show ? 'show' : ''}`}
      style={{ display: isVisible }} onClick={(e) => e.stopPropagation()}>
      <div className="modal-content">
        <button onClick={onClose} className='modal-close-button' aria-label='Close modal'></button>
        {children}
        <div style={{ display: 'flex', marginTop: '32px', justifyContent: 'center', gap: '0' }}>
          <a href="https://t.me/OneOfTheBest0" target="_blank" className="social-button">
            <img className='social' src="/icons/telegram.svg" alt="Telegram" style={{ marginRight: 22, display: 'inline-block', width: 28, height: 28 }} />
            <span>Telegram</span>
          </a>
          <a href="https://www.instagram.com/tich0rem/" target="_blank" className="social-button">
            <img className='social' src="/icons/instagram.svg" alt="Instagram" style={{ marginRight: 22, display: 'inline-block', width: 28, height: 28 }} />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;