import { BrowserRouter as Router } from 'react-router-dom';

import { Routes } from './routes';
import { InjectAxiosInterceptors } from './pages/InjectAxiosInterceptors';
import { AppProvider } from './hooks';
import GlobalStyle from './styles/global';

export function App() {
  return (
    <Router>
      <AppProvider>
        <InjectAxiosInterceptors />

        <Routes />
      </AppProvider>

      <GlobalStyle />
    </Router>
  );
}
