import React, { useState, useReducer } from 'react';
import NavBar from '../../components/NavBar'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: '100vh'
  },
  textField: {
    marginBottom: theme.spacing(2)
  },
  btn: {
    color: theme.palette.background.default
  },
  loading: {
    color: theme.palette.background.default
  }
}));

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
  const classes = useStyles();
  const [saving, setSaving] = useState(false);
  const [state, dispatch] = useReducer(reducer, props.video, init);
  const changeValue = ({ field, value }) => {
    return dispatch({
      type: 'change',
      field,
      value
    });
  };

  const saveVideo = async () => {
    setSaving(true);
    await fetch(`http://localhost:1337/videos/${props.video.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: state.url,
        title: state.title
      })
    })
    setSaving(false);
  }

  return (
    <>
      <NavBar />
      <Grid
        container
        spacing={0}
        alignItems='center'
        justify='center'
        className={classes.container}
      >
        <Grid item xs={4}>
          <TextField
            id='title'
            value={state.title}
            onChange={(e) => changeValue({ field: 'title', value: e.target.value })}
            fullWidth
            className={classes.textField}
          />
          <TextField
            id='url'
            value={state.url}
            onChange={(e) => changeValue({ field: 'url', value: e.target.value })}
            fullWidth
            className={classes.textField}
          />
          <Button
            onClick={saveVideo}
            variant='contained'
            color='secondary'
            className={classes.btn}
            startIcon={saving && <CircularProgress size={20} className={classes.loading} />}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default EditVideo;
