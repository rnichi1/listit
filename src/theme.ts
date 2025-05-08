import { DefaultTheme } from 'styled-components';

const darkTheme: DefaultTheme = {
  colors: {
    primary: '#6C63FF', // Purple shade
    primaryDark: '#5C54E0',
    cta: '#00BFA6', // Teal accent
    white: '#F2F2F2',
    black: '#121212',
    background: '#1E1E1E',
    surface: '#2D2D2D',
    text: '#F2F2F2',
    textSecondary: '#B3B3B3',
    border: '#3D3D3D',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
  },
  fontSizes: {
    small: '12px',
    medium: '16px',
    large: '20px',
    xlarge: '24px',
    xxlarge: '32px',
  },
};

export { darkTheme };
