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
  const classes = useStyles();
  const [saving, setSaving] = useState(false);
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
    setSaving(true);
    await fetch('http://localhost:1337/videos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: state.url,
        title: state.title
      })
    })
    setSaving(false);
  };

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
            onClick={createVideo}
            variant='contained'
            color='secondary'
            className={classes.btn}
            startIcon={saving && <CircularProgress size={20} className={classes.loading} />}
          >
            Create
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default CreateVideo;
