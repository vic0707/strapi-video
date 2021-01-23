import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  spacing: 8,
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#007bff',
    },
    error: {
      main: '#dc3545',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
