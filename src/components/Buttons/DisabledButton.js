import { Button, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  buttonStyles: {
    minWidth: '100%',
    height: '100%',
    minHeight: '4.5rem',
    fontSize: '2rem',
    fontWeight: 900,
    backgroundColor: [theme.palette.disabled.main],
  },
  paper: {
    height: '100%',
  },
}));

const DisabledButton = React.memo((props) => {
  const classes = useStyles();

  return (
    <Grid item xs={3} data-testid="disabled">
      <Paper className={classes.paper}>
        <Button
          className={classes.buttonStyles}
          disabled={props.disable}
        ></Button>
      </Paper>
    </Grid>
  );
});

export default DisabledButton;
