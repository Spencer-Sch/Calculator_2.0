import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
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

const DisabledButton = (props) => {
  const classes = useStyles();

  const dispatch = useStore()[1];

  //   const printButtonType = () => {
  //     console.log('Disabled button');
  //   };

  return (
    <Grid item xs={3}>
      <Paper className={classes.paper}>
        <Button className={classes.buttonStyles} disabled={props.disable}>
          {props.icon}
        </Button>
      </Paper>
    </Grid>
  );
};

export default DisabledButton;
