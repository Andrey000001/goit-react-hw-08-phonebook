// Modal.js
import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import { active } from '../../redux/modal/slice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
export const Modal = ({ content, target }) => {
  const activeModal = useSelector(({ modal }) => modal.isModalOpen);
  const dispatch = useDispatch();
  const closeModal = e => {
    if (e.target.classList.contains('modal')) {
      dispatch(active(false));
    }
  };
  return ReactDOM.createPortal(
    <div className={activeModal ? 'modal active' : 'modal'} onClick={closeModal}>
      <div className="modal__content">{content}</div>
    </div>,
    document.getElementById(target)
  );
};
