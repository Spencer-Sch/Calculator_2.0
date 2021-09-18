import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import EquationOutput from './EquationOutput';
import EquationResultOutput from './EquationResultOutput';

const useStyles = makeStyles({
  grid: {
    margin: 0,
  },
});

const EquationArea = () => {
  const classes = useStyles();
  return (
    <Grid container item xs={12} className={classes.grid}>
      <EquationOutput />
      <EquationResultOutput />
    </Grid>
  );
};

export default EquationArea;
