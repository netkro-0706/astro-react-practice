import { atom } from 'nanostores';

export const cartOfCount = atom(0);

export const addToCart = (amount = 1) => {
  cartOfCount.set(cartOfCount.get() + amount);
};

export const subToCart = (amount = 1) => {
  cartOfCount.set(Math.max(0, cartOfCount.get() - amount));
};

export const resetToCart = () => {
  cartOfCount.set(0);
};
