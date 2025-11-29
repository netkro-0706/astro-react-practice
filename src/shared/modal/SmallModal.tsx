import { useStore } from '@nanostores/react';
import { hideModal, modalState } from '../../stores/modal';
import { closeButton, modal, modalContent } from './SmallModal.css';

const SmallModal = () => {
  const { isOpen, message } = useStore(modalState);

  if (!isOpen) return null;

  return (
    <div className={modal} onClick={hideModal}>
      <div className={modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={closeButton} onClick={hideModal}>
          x
        </button>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default SmallModal;
