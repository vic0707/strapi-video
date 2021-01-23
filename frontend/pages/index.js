import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:1337/videos');
  const videos = await res.json();
  return {
    props: { videos }
  }
}

const App = (props) => {
  const { videos } = props;

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  console.log('file: index.js ~ line 14 ~ videos', videos);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>Welcome to next.js!</div>
    </ThemeProvider>
  );
};

export default App;
