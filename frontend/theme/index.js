import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#007bff',
    },
    error: {
      main: '#dc3545',
    },
    background: {
      default: '#000000',
    },
  },
});

export default theme;
