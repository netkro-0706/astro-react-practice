import { style } from '@vanilla-extract/css';

export const cartButtonBox = style({
  minWidth: '100px',
});

export const countBox = style({
  marginBottom: '10px',
  marginLeft: 'auto',
});

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

export const cartBox = style({
  backgroundColor: 'black',
  color: 'white',
  borderRadius: '45px',
});
