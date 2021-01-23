import React, { useState } from 'react';
import ReactPlayer from 'react-player';

import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';

const VideoEntry = ({ title, url }) => {
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
        onClick={() => setPlay(true)}
      >
        {/* <span fontWeight={500} fontSize={24}> */}
          {title}
        {/* </span> */}
      </Box>
    </>
  );
}

export default VideoEntry;
