import React, { useReducer } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

function CreateVideo () {
  const [state, dispatch] = useReducer(reducer, {
    title: '',
    url: ''
  });
  const changeValue = ({ field, value }) => {
    return dispatch({
      type: 'change',
      field,
      value
    });
  };

  const createVideo = async () => {
    const res = await fetch('http://localhost:1337/videos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: state.url,
        title: state.title
      })
    })
  }

  return (
    <>
      <TextField id='title' value={state.title} onChange={(e) => changeValue({ field: 'title', value: e.target.value })} />
      <TextField id='url' value={state.url} onChange={(e) => changeValue({ field: 'url', value: e.target.value })} />
      <Button onClick={createVideo}>
        Save
      </Button>
    </>
  );
}

export default CreateVideo;
