import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import EquasionOutput from './EquasionOutput';
import EquasionResultOutput from './EquasionResultOutput';

const useStyles = makeStyles({
  grid: {
    margin: 0,
  },
});

const EquasionArea = () => {
  const classes = useStyles();
  return (
    <Grid container item xs={12} className={classes.grid}>
      <EquasionOutput />
      <EquasionResultOutput />
    </Grid>
  );
};

export default EquasionArea;
