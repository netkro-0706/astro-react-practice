import { style } from '@vanilla-extract/css';

export const modal = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  paddingTop: '20px',
  zIndex: 1000,
});

export const modalContent = style({
  backgroundColor: 'white',
  padding: '20px 40px',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  minWidth: '300px',
  textAlign: 'center',
});

export const closeButton = style({
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: 'none',
  border: 'none',
  fontSize: '24px',
  cursor: 'pointer',
  color: '#666',
  selectors: {
    '&:hover': {
      color: '#000',
    },
  },
});
