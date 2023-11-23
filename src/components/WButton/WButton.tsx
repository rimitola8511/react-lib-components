import React from 'react';
import { Box, Button, ButtonOwnProps, CircularProgress } from '@mui/material';

interface ILoadingButton {
  variant?: ButtonOwnProps['variant'];
  color?: ButtonOwnProps['color'];
  size?: ButtonOwnProps['size'];
  isLoading?: boolean;
  label: string;
  onClick?: () => void;
}

function LoadingButton({
  variant = 'contained',
  isLoading = false,
  color,
  size,
  label,
  ...props
}: ILoadingButton) {
  return (
    <Button
      {...props}
      variant={variant}
      disabled={isLoading}
      sx={{ letterSpacing: 0.4 }}
      color={color}
      size={size}
    >
      {isLoading ? (
        <Box
          component="span"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          {label}
          <CircularProgress
            variant="indeterminate"
            size={15}
            sx={{ color: 'secondary.dark' }}
          />
        </Box>
      ) : (
        label
      )}
    </Button>
  );
}

export default LoadingButton;
