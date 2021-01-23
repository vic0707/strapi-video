import Link from 'next/link'
import Image from 'next/image'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  link: {
    color: theme.palette.background.default,
    textDecoration: 'none'
  },
  icon: { cursor: 'pointer' }
}));

function NavBar () {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar>
        <Box flexGrow={1} className={classes.icon}>
          <Link href={`/`}>
            <Image
              src='/tldv-white-logo.bccdfce9.svg'
              alt='Tldv'
              width={50}
              height={50}
            />
          </Link>
        </Box>
        <Link href={`/videos/create`}>
          <Button variant='contained' color='secondary' className={classes.link}>
            Add New Video
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
