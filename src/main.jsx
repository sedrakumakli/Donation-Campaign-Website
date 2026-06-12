import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CacheProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import rtlCache from "./theme/rtl";
import theme from "./theme/theme";

import './index.css'
import App from './App.jsx'

document.documentElement.setAttribute("dir", "rtl");
document.documentElement.setAttribute("lang", "ar");


createRoot(document.getElementById('root')).render(
<CacheProvider value={rtlCache}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
       <App />
      </BrowserRouter>
    </ThemeProvider>
  </CacheProvider>
);