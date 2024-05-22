'use client';

import { ThemeProvider, CssBaseline, Box } from '@mui/material';

import theme from './theme';
import './globals.css';
import Sidebar from '@/component/Layout/Sidebar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box display="flex" height="100vh">
            <Sidebar />
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: 3,
                transition: 'margin-left 0.3s',
                ml: 0,
              }}
            >
              {children}
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
