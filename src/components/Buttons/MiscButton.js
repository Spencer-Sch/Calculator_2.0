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
  miscButtonStyles: {
    backgroundColor: [theme.palette.operator.main],
    '&:hover': {
      backgroundColor: [theme.palette.operator.dark],
    },
  },
  numberButtonStyles: {
    backgroundColor: [theme.palette.primary.main],
    '&:hover': {
      backgroundColor: [theme.palette.primary.dark],
    },
  },
  paper: {
    height: '100%',
  },
}));

const MiscButton = React.memo((props) => {
  const classes = useStyles();
  const dispatch = useStore(false)[1];

  const combinedClasses = [
    `${classes.buttonStyles}`,
    props.classesFlag
      ? `${classes.numberButtonStyles}`
      : `${classes.miscButtonStyles}`,
  ].join(' ');

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
    <Grid item xs={3} data-testid={props.value}>
      <Paper className={classes.paper}>
        <Button
          className={combinedClasses}
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
});

export default MiscButton;
