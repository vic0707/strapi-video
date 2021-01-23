import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Link from 'next/link'

import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  title: {
    fontWeight: 500,
    fontSize: 24,
    cursor: 'pointer'
  },
});

const VideoEntry = ({ title, url, id }) => {
  const classes = useStyles();
  const [play, setPlay] = useState(false);
  return (
    <>
      <Dialog open={play} onClose={() => setPlay(false)}>
        <ReactPlayer url={url} playing={play} controls />
      </Dialog>
      <Box
        color='primary.main'
        bgcolor='secondary.main'
        border={1}
        m={2}
        p={2}
      >
        <span className={classes.title} onClick={() => setPlay(true)}>
          {title}
        </span>
        <Button>
          <Link href={`/videos/${id}`}>
            Edit video
          </Link>
        </Button>
      </Box>
    </>
  );
}

export default VideoEntry;
