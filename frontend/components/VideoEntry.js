import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Link from 'next/link'

import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 500,
    fontSize: 24
  },
  link: {
    color: theme.palette.background.default,
    textDecoration: 'none'
  }
}));

function VideoEntry ({ title, url, id }) {
  const classes = useStyles();
  const [play, setPlay] = useState(false);
  return (
    <>
      <Dialog open={play} onClose={() => setPlay(false)}>
        <ReactPlayer url={url} playing={play} controls />
      </Dialog>
      <Box
        color='primary.main'
        border={1}
        m={2}
        p={2}
        display='flex'
        justifyContent='space-between'
      >
        <Button
          className={classes.title}
          variant='contained'
          onClick={() => setPlay(true)}
        >
          {title}
        </Button>
        <Link href={`/videos/${id}`}>
          <Button variant='contained' color='secondary' className={classes.link}>
            Edit video
          </Button>
        </Link>
      </Box>
    </>
  );
}

export default VideoEntry;
