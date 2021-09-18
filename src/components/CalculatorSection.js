import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import CalculatorButtonArea from './CalculatorButtonArea';
import EquationArea from './EquationArea';

const useStyles = makeStyles({
  grid: {},
});

const CalculatorSection = () => {
  const classes = useStyles();
  return (
    <Grid container item xs={8} className={classes.grid}>
      <EquationArea />
      <CalculatorButtonArea />
    </Grid>
  );
};

export default CalculatorSection;
