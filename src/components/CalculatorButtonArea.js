import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import CalculatorButton from './CalculatorButton';

import { buttonMap } from '../constants/constants.js';

const useStyles = makeStyles({
  buttonAreaStyles: {
    // height: '70%',
  },
});

const CalculatorButtonArea = () => {
  const createButtons = buttonMap.map((button) => (
    <CalculatorButton
      key={button.id}
      icon={button.icon}
      disable={!button.icon ? true : false}
    />
  ));

  const classes = useStyles();

  return (
    <Grid
      container
      item
      spacing={1}
      xs={12}
      className={classes.buttonAreaStyles}
    >
      {createButtons}
    </Grid>
  );
};

export default CalculatorButtonArea;
