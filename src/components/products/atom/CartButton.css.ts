import { style } from '@vanilla-extract/css';

export const cartCount = style({
  marginRight: '5px',
  textAlign: 'center',
});

export const addCart = style({
  borderRadius: '8px 0 0 8px',
  textAlign: 'center',
});

export const subCart = style({
  borderLeft: 'none',
  borderRadius: '0 8px 8px 0',
  textAlign: 'center',
});
