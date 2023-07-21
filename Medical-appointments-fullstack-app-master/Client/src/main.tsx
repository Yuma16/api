import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material';
import './styles/index.css'

import { RouterProvider } from 'react-router-dom';
import { router } from './router/index.tsx';
import theme from './styles/theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={ router }/>
    </ThemeProvider>
  </React.StrictMode>,
)
