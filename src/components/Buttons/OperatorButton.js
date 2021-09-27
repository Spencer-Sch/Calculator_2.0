import { Button, Grid, makeStyles, Paper } from '@material-ui/core';
import { cyan } from '@material-ui/core/colors';
import React from 'react';

import { useStore } from '../../hooks-store/store';

const useStyles = makeStyles((theme) => ({
  buttonStyles: {
    minWidth: '100%',
    height: '100%',
    minHeight: '4.5rem',
    fontSize: '2rem',
    fontWeight: 900,
    // color: [theme.palette.operator.contrastText],
  },
  otherButtonStyles: {
    backgroundColor: [theme.palette.operator.main],
    '&:hover': {
      backgroundColor: [theme.palette.operator.dark],
    },
  },
  equalsButtonStyles: {
    backgroundColor: [theme.palette.operator.equalsMain],
    '&:hover': {
      backgroundColor: [theme.palette.operator.equalsDark],
    },
  },
  paper: {
    height: '100%',
  },
}));

const OperatorButton = (props) => {
  const classes = useStyles();

  const combinedStyles = [
    `${classes.buttonStyles}`,
    props.classesFlag
      ? `${classes.equalsButtonStyles}`
      : `${classes.otherButtonStyles}`,
  ].join(' ');

  const dispatch = useStore()[1];

  const sendDispatch = (event) => {
    const value = event.target.closest('button').value;
    switch (value) {
      case '+':
      case '-':
      case 'x':
      case '/':
        dispatch('SUM_SUB_MULT_DIV', value);
        break;
      case '=':
        dispatch('EQUALS');
        break;
      default:
        throw new Error('Error: Value not recognized');
    }
  };

  return (
    <Grid item xs={3}>
      <Paper className={classes.paper}>
        <Button
          className={combinedStyles}
          variant="contained"
          value={props.value}
          onClick={sendDispatch}
        >
          {props.icon}
        </Button>
      </Paper>
    </Grid>
  );
};

export default OperatorButton;
