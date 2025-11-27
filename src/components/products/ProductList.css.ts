import { style } from '@vanilla-extract/css';

export const productBox = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1rem',
});
