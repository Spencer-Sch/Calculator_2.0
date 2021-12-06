import { Grid, Typography, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  grid: {
    height: '10%',
  },
  typography: {
    marginBottom: 0,
  },
});

const HistoryTitle = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.grid}>
      <Typography variant="h3" align="center" className={classes.typography}>
        History
      </Typography>
    </Grid>
  );
};

export default HistoryTitle;
