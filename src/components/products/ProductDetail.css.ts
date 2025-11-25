import { style } from '@vanilla-extract/css';

export const productContainer = style({
  display: 'flex',
  gap: '1rem',
});

export const imageSection = style({
  width: '640px',
  flexShrink: 0,
});

export const descriptionSection = style({
  flex: 1,
});
