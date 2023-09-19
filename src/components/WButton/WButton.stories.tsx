import type { Meta, StoryObj } from '@storybook/react';

import WButton from './WButton';

const meta = {
  title: 'Button',
  component: WButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: { control: 'contained' },
  },
} satisfies Meta<typeof WButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Button: Story = {
  args: {
    label: 'Aceptar'
  }
}

export const ButtonText: Story = {
  args: {
    variant: 'text',
    label: 'Aceptar',
    color: 'primary',
  },
};

export const ButtonOutlined: Story = {
    args: {
      variant: 'outlined',
      label: 'Cancelar',
      color: 'error',
    },
  };

export const ButtonLoading: Story = {
  args: {
    isLoading: true,
    label: 'Guardar',
  },
};
