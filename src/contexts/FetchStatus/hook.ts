import { useContext } from 'react';

import { LoadingStatusContext } from './context';

export const useLoadingStatus = () => {
  const [
    isLoading,
    setIsLoading,
    errorMessage,
    setError,
  ] = useContext(LoadingStatusContext);

  const handleLoadingStatus = (value: boolean) => setIsLoading?.(value);

  const handleErrorMessage = (value: string) => setError?.(value);

  return {
    errorMessage,
    handleErrorMessage,
    handleLoadingStatus,
    isLoading,
  };
};
