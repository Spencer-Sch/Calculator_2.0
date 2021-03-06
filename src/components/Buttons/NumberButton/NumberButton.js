import { Button, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';

import { useStore } from '../../../hooks-store/store';

const useStyles = makeStyles((theme) => ({
  buttonStyles: {
    minWidth: '100%',
    height: '100%',
    minHeight: '4.5rem',
    fontSize: '2rem',
    fontWeight: 900,
    '&:active': {
      boxShadow: 'none',
    },
  },
  paper: {
    height: '100%',
  },
}));

const NumberButton = React.memo((props) => {
  const classes = useStyles();
  const dispatch = useStore(false)[1];

  const sendDispatch = (event) => {
    const value = event.target.closest('button').value;
    dispatch('BUILD_OPERAND', value);
  };

  return (
    <Grid item xs={3}>
      <Paper className={classes.paper}>
        <Button
          className={classes.buttonStyles}
          variant="contained"
          color="primary"
          disableRipple={true}
          disabled={props.disable}
          value={props.value}
          onClick={sendDispatch}
          data-testid={props.value}
        >
          {props.icon}
        </Button>
      </Paper>
    </Grid>
  );
});

export default NumberButton;
