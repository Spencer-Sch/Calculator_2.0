import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import CalculatorButtonArea from './CalculatorButtonArea';
import EquationArea from './EquationArea';

const useStyles = makeStyles({
  grid: {
    justifyContent: 'center',
  },
  '@media (max-width: 950px)': {},
});

const CalculatorSection = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      xs={12}
      sm={12}
      md={8}
      className={classes.grid}
      data-testid="calculatorSection"
    >
      <EquationArea />
      <CalculatorButtonArea />
    </Grid>
  );
};

export default CalculatorSection;
