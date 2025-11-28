import { style } from '@vanilla-extract/css';

export const ProductTitleBox = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 'calc(100vh - 27.5px)',
  backgroundImage: 'url(/banner.png)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
});

export const Title = style({
  color: 'rgba(255, 255, 255)',
  textShadow: `
  1px 0px 1px rgba(0, 0, 0, 0.6),
  -1px 0px 1px rgba(0, 0, 0, 0.6),
  0px 1px 1px rgba(0, 0, 0, 0.6),
  0px -1px 1px rgba(0, 0, 0, 0.6)
`,
});
