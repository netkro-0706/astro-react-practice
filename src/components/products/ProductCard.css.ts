import { style } from '@vanilla-extract/css';

export const CardBox = style({
  width: '340px',
  height: '450px',
  margin: '5px',
  padding: '10px',
  border: '1px solid black',
  borderRadius: '8px',
});

export const Title = style({
  background: '#ccc',
  fontSize: '24px',
  width: 'fit-content',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const Description = style({
  display: '-webkit-box',
  WebkitLineClamp: 4,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
});
