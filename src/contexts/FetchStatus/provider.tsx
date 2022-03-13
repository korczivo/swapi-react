import {
  ReactNode,
  useState,
} from 'react';

import { LoadingStatusContext } from './context';

interface LoadingStatusProviderProps {
  children: ReactNode;
}

export const LoadingStatusProvider = ({ children }: LoadingStatusProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  return (
    <LoadingStatusContext.Provider value={[
      isLoading,
      setIsLoading,
      error,
      setError,
    ]}
    >
      {children}
    </LoadingStatusContext.Provider>
  );
};
