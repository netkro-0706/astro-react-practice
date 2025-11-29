import { style } from '@vanilla-extract/css';

export const CardBox = style({
  width: '100%',
  maxWidth: '340px',
  height: '500px',
  margin: '5px',
  padding: '10px',
  border: '1px solid black',
  borderRadius: '8px',
});

export const Title = style({
  background: '#ccc',
  fontSize: '24px',
  maxWidth: '320px',
});
