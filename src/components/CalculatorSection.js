import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import CalculatorButtonArea from './CalculatorButtonArea';
import EquasionArea from './EquasionArea';

const useStyles = makeStyles({
  grid: {},
});

const CalculatorSection = () => {
  const classes = useStyles();
  return (
    <Grid container item xs={8} className={classes.grid}>
      <EquasionArea />
      <CalculatorButtonArea />
    </Grid>
  );
};

export default CalculatorSection;
