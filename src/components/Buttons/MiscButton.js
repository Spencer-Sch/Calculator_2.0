import { Button, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';

import { useStore } from '../../hooks-store/store';

const useStyles = makeStyles((theme) => ({
  buttonStyles: {
    minWidth: '100%',
    height: '100%',
    minHeight: '4.5rem',
    fontSize: '2rem',
    fontWeight: 900,
  },
  paper: {
    height: '100%',
  },
}));

const MiscButton = (props) => {
  const classes = useStyles();

  const dispatch = useStore()[1];

  const sendDispatch = (event) => {
    const value = event.target.closest('button').value;
    switch (value) {
      case '%':
        dispatch('PERCENT', value);
        break;
      case '.':
        dispatch('DECIMAL', value);
        break;
      case '+/-':
        dispatch('POSITIVE_NEGATIVE', value);
        break;
      case 'CE':
      case 'C':
        dispatch('CLEAR_FUNCTIONS', value);
        break;
      case '<-':
        dispatch('BACKSPACE', value);
        break;
      default:
        throw new Error('Error: Value not recognized');
    }
  };

  return (
    <Grid item xs={3}>
      <Paper className={classes.paper}>
        <Button
          className={classes.buttonStyles}
          variant="contained"
          color="primary"
          value={props.value}
          onClick={sendDispatch}
        >
          {props.icon}
        </Button>
      </Paper>
    </Grid>
  );
};

export default MiscButton;
