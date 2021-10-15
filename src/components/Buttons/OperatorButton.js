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
    '&:active': {
      boxShadow: 'none',
    },
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

const OperatorButton = React.memo((props) => {
  const classes = useStyles();
  const dispatch = useStore(false)[1];

  const combinedStyles = [
    `${classes.buttonStyles}`,
    props.classesFlag
      ? `${classes.equalsButtonStyles}`
      : `${classes.otherButtonStyles}`,
  ].join(' ');

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
          disableRipple={true}
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

export default OperatorButton;
