import { ReactNode } from 'react';

import { AuthProvider } from './auth';
import { LanguageProvider } from './language';

interface AppProviderProps {
  children: ReactNode;
}
export function AppProvider({ children }: AppProviderProps) {
  return (
    <AuthProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </AuthProvider>
  );
}
