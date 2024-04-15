// Modal.js
import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
export const Modal = ({ content, target }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal__content">{content}</div>
    </div>,
    document.getElementById(target)
  );
};
