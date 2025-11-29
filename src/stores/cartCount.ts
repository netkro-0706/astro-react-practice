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

export const addToCart = (productId: string, count: number) => {
  cartItems.set({
    ...cartItems.get(),
    [productId]: count,
  });
};

export const resetToCart = (productId: string) => {
  cartItems.set({ ...cartItems.get(), [productId]: 0 });
};
