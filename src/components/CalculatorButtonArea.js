import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';

import { buttonMap } from '../constants/buttonMap.js';
import MiscButton from './Buttons/MiscButton';
import OperatorButton from './Buttons/OperatorButton';
import NumberButton from './Buttons/NumberButton';
import DisabledButton from './Buttons/DisabledButton';

const useStyles = makeStyles((theme) => ({
  grid: {
    margin: 0,
  },
}));

const CalculatorButtonArea = () => {
  const classes = useStyles();

  const createButtons = buttonMap.map((button) => {
    if (button.type === 'misc') {
      return (
        <MiscButton
          key={button.id}
          icon={button.icon}
          value={button.value}
          classesFlag={button.classesFlag}
        />
      );
    } else if (button.type === 'number') {
      return (
        <NumberButton key={button.id} icon={button.icon} value={button.value} />
      );
    } else if (button.type === 'operator') {
      return (
        <OperatorButton
          key={button.id}
          icon={button.icon}
          value={button.value}
          classesFlag={button.classesFlag}
        />
      );
    } else {
      return <DisabledButton key={button.id} disable={true} />;
    }
  });

  return (
    <Grid
      container
      item
      className={classes.grid}
      spacing={1}
      xs={12}
      data-testid="buttonArea"
    >
      {createButtons}
    </Grid>
  );
};

export default CalculatorButtonArea;
