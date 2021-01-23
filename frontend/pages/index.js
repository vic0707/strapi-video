import React from 'react';
import VideoEntry from '../components/VideoEntry'

export async function getServerSideProps() {
  const res = await fetch('http://localhost:1337/videos');
  const videos = await res.json();
  return {
    props: { videos }
  }
}

const App = (props) => {
  const { videos } = props;
  return (
    <>
      {videos.map(({ title, url, id }, key) => (
        <VideoEntry title={title} url={url} id={id} key={key} />
      ))}
    </>
  );
};

export default App;
