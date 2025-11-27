import { style } from '@vanilla-extract/css';

export const NumberWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '4px',
});

export const NumberBox = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid black',
  borderRadius: '45px',
  padding: '1px',
  width: '22px',
  height: '22px',
  selectors: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

export const Number = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
});
