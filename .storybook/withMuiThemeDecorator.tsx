import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '../src/themes/light.theme';

export const withMuiThemeDecorator = (Story) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Story />
    </ThemeProvider>
  );
};
