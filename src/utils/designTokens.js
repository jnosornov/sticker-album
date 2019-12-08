// choices
export const theme = {
  colors: {
    black: '#000',
    white: '#fff'
  },
  borders: {
    1: '2px',
    2: '4px',
    3: '8px',
    4: '16px'
  },
  fontSize: {
    1: '12px',
    2: '14px',
    3: '16px',
    4: '24px',
    5: '36px',
    6: '60px',
    7: '110px'
  },
  fontWeight: {
    thin: 100,
    extraLight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    ultraBold: 900
  },
  fontFamily: {
    sans: ['Lato', 'sans-serif']
  }
};

// actions
export const tokens = {
  sticker: {
    border: theme.borders[4]
  },
  placeholder: {
    border: theme.borders[3],
    fontSize: theme.fontSize[7],
    fontWeight: theme.fontWeight.medium
  }
};
