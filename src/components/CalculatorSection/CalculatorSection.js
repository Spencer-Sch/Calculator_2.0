import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import CalculatorButtonArea from '../CalculatorButtonArea/CalculatorButtonArea';
import EquationArea from '../EquationArea/EquationArea';

const useStyles = makeStyles((theme) => ({
  grid: {
    height: '100%',
  },
}));

const CalculatorSection = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      xs={12}
      md={12}
      lg={8}
      className={classes.grid}
      data-testid="calculatorSection"
    >
      <EquationArea />
      <CalculatorButtonArea />
    </Grid>
  );
};

export default CalculatorSection;
