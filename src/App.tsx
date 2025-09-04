import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Routes } from './routes';
import { InjectAxiosInterceptors } from './pages/InjectAxiosInterceptors';
import { AppProvider } from './hooks';
import GlobalStyle from './styles/global';

export function App() {
  return (
    <Router>
      <AppProvider>
        <ToastContainer />

        <InjectAxiosInterceptors />

        <Routes />
      </AppProvider>

      <GlobalStyle />
    </Router>
  );
}
