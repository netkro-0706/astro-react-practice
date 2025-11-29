import { atom } from 'nanostores';

export const modalState = atom<{
  isOpen: boolean;
  message: string;
}>({
  isOpen: false,
  message: '',
});

export const showModal = (message: string) => {
  modalState.set({ isOpen: true, message });

  // 3초 뒤 자동으로 닫힘
  setTimeout(() => {
    modalState.set({ isOpen: false, message: '' });
  }, 3000);
};

export const hideModal = () => {
  modalState.set({ isOpen: false, message: '' });
};
