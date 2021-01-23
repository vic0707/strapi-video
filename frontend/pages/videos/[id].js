import React, { useReducer } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:1337/videos/${context.query.id}`);
  const video = await res.json();
  return {
    props: { video }
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'change':
      return {
        ...state,
        [action.field]: action.value
      }
    default:
      return state;
  }
}

function init (initialState) {
  return {
    title: initialState.title,
    url: initialState.url
  }
}

function EditVideo (props) {
  const [state, dispatch] = useReducer(reducer, props.video, init);
  console.log('file: [id].js ~ line 11 ~ state', state);
  const changeValue = ({ field, value }) => {
    return dispatch({
      type: 'change',
      field,
      value
    });
  };

  const saveVideo = async () => {
    const res = await fetch(`http://localhost:1337/videos/${props.video.id}`, {
      method: 'PUT',
      headers: {
        // 'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: state.url,
        title: state.title
      })
    })
    console.log('res: ', res);
  }

  return (
    <>
      <TextField id='title' value={state.title} onChange={(e) => changeValue({ field: 'title', value: e.target.value })} />
      <TextField id='url' value={state.url} onChange={(e) => changeValue({ field: 'url', value: e.target.value })} />
      <Button onClick={saveVideo}>
        Save
      </Button>
    </>
  );
}

export default EditVideo;
