import { ReactNode } from 'react';

import { LanguageProvider } from './language';
import { WindowDimensionsProvider } from './windowDimensions';

interface AppProviderProps {
  children: ReactNode;
}
export function AppProvider({ children }: AppProviderProps) {
  return (
    <LanguageProvider>
      <WindowDimensionsProvider>{children}</WindowDimensionsProvider>
    </LanguageProvider>
  );
}
