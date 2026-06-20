import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import rtlCache from './theme/rtl';
import theme from './theme/theme';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

document.documentElement.setAttribute('dir', 'rtl');
document.documentElement.setAttribute('lang', 'ar');

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 0 } },
});

createRoot(document.getElementById('root')).render(
  <CacheProvider value={rtlCache}>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  </CacheProvider>,
);
