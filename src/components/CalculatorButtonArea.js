import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';

import { buttonMap } from '../constants/buttonMap.js';
import MiscButton from './Buttons/MiscButton';
import OperatorButton from './Buttons/OperatorButton';
import NumberButton from './Buttons/NumberButton';
import DisabledButton from './Buttons/DisabledButton';
import { getThemeProps } from '@material-ui/styles';

// const useStyles = makeStyles(theme => ({}));

const CalculatorButtonArea = () => {
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

  // const classes = useStyles();

  return (
    <Grid container item spacing={1} xs={12}>
      {createButtons}
    </Grid>
  );
};

export default CalculatorButtonArea;
