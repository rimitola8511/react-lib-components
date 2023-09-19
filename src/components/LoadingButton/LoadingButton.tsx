import React from 'react';
import { Box, Button, CircularProgress } from '@mui/material';
import { ILoadingButton } from './types';

function LoadingButton({
  variant = 'contained',
  isLoading,
  isDisabled,
  buttonLabel,
  submittingLabel = '...Procesando',
  ...props
}: ILoadingButton) {
  return (
    <Button variant={variant} disabled={isDisabled} {...props}>
      {isLoading ? (
        <Box
          component="span"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <CircularProgress
            variant="indeterminate"
            size={15}
            sx={{ color: 'secondary.dark' }}
          />
          {submittingLabel}
        </Box>
      ) : (
        buttonLabel
      )}
    </Button>
  );
}

export default LoadingButton;