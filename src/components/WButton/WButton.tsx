import React from 'react';
import { Box, Button, ButtonOwnProps, CircularProgress } from '@mui/material';

interface ILoadingButton {
  variant?: 'contained' | 'text' | 'outlined';
  color?: ButtonOwnProps['color'],
  isLoading?: boolean;
  label: string;
  onClick?: () => void;
}

function LoadingButton ({
  variant = 'contained',
  isLoading = false,
  color,
  label,
  ...props
}: ILoadingButton) {
  return (
    <Button variant={variant} disabled={isLoading} {...props} sx={{ letterSpacing: 0.4 }} color={color}>
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