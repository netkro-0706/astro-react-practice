import { persistentAtom } from '@nanostores/persistent';

type CartState = Record<string, number>;

export const cartItems = persistentAtom(
  'cart:items',
  {},
  {
    encode: JSON.stringify,
    decode: (value) => {
      try {
        const parsed = JSON.parse(value);
        return parsed && typeof parsed === 'object'
          ? (parsed as CartState)
          : {};
      } catch {
        return {};
      }
    },
  }
);

export const addToCart = (productId: string, amount = 1) => {
  cartItems.set({
    ...cartItems.get(),
    [productId]: (cartItems.get()[productId] ?? 0) + amount,
  });
};

export const subFromCart = (productId: string, amount = 1) => {
  const current = cartItems.get()[productId] ?? 0;
  const next = Math.max(0, current - amount);
  const nextState = { ...cartItems.get(), [productId]: next };
  if (next === 0) delete nextState[productId];
  cartItems.set(nextState);
};

export const resetToCart = (productId: string) => {
  cartItems.set({ ...cartItems.get(), [productId]: 0 });
};
