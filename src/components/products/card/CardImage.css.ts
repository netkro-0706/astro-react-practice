import { style } from '@vanilla-extract/css';

export const cardImage = style({
  width: '100%',
  maxWidth: '320px',
  height: 'auto',
  aspectRatio: '4/3',
  objectFit: 'cover',
  imageRendering: 'crisp-edges',
  willChange: 'auto',
});
