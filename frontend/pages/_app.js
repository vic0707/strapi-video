import React from 'react';
import Link from 'next/link'

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import theme from '../theme';

function App ({ Component, pageProps }) {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6'>
            Video Player
          </Typography>
          <Button>
            <Link href={`/videos/create`}>
              Add New Video
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App
