import { ReactNode } from 'react';

import { AuthProvider } from './auth';
import { LanguageProvider } from './language';
import { WindowDimensionsProvider } from './windowDimensions';

interface AppProviderProps {
  children: ReactNode;
}
export function AppProvider({ children }: AppProviderProps) {
  return (
    <AuthProvider>
      <LanguageProvider>
        <WindowDimensionsProvider>{children}</WindowDimensionsProvider>
      </LanguageProvider>
    </AuthProvider>
  );
}
