import React from 'react';
import type { Preview } from '@storybook/react';

import { withMuiThemeDecorator } from './withMuiThemeDecorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [withMuiThemeDecorator],
};

export default preview;
