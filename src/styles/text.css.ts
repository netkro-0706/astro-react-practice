import { recipe } from '@vanilla-extract/recipes';

export const clampText = recipe({
  variants: {
    lines: {
      1: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
      2: {
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      },
      3: {
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      },
      4: {
        display: '-webkit-box',
        WebkitLineClamp: 4,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      },
    },
  },

  defaultVariants: {
    lines: 1,
  },
});

export const textType = recipe({
  variants: {
    type: {
      title: {
        fontSize: '24px',
        fontWeight: 'bolder',
      },
      price: {
        fontSize: '16px',
      },
      description: {
        fontSize: '18px',
      },
    },
  },
});
