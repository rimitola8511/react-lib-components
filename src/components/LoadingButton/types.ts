export interface ILoadingButton {
  variant: 'contained' | 'text' | 'outlined';
  isLoading: boolean;
  isDisabled: boolean;
  buttonLabel: string;
  submittingLabel: string;
}
