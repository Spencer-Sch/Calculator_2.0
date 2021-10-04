import { Grid, makeStyles, Typography } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';
import React, { useEffect } from 'react';
import { useStore } from '../hooks-store/store';

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 0,
    minHeight: '4rem',
    marginBottom: 16,
    backgroundColor: grey[500],
    borderRadius: theme.shape.borderRadius,
    boxShadow: `inset 0px 12px 8px -10px ${grey[600]}, inset 0px -16px 8px -10px ${grey[600]}, inset 12px 0px 8px -10px ${grey[600]}, inset -16px 0px 8px -10px ${grey[600]}`,
  },
  typography: {
    // color: red['A700'],
    fontWeight: 900,
    paddingRight: 12,
  },
}));

const EquationOutput = () => {
  const state = useStore()[0];
  const classes = useStyles();

  let renderThis;

  // if (state.equasionResult) {
  if (state.runCalculate) {
    setTimeout(() => {
      if (state.cameFromEquals) {
        renderThis = `${state.operand1} ${state.operator} ${state.operand2} = `;
      } else {
        renderThis = `${state.operand1} ${state.operator}`;
      }
    }, 80);
    // if (state.equasionResult.length > 14) {
    //   typographyClass = classes.typographySmall;
    // }
  } else if (state.operand2) {
    renderThis = `${state.operand1} ${state.operator} ${state.operand2} = `;
  } else if (state.operator) {
    renderThis = `${state.operand1} ${state.operator}`;
  } else if (state.operand1) {
    renderThis = `${state.operand1}`;
  }

  return (
    <Grid item xs={12} className={classes.grid}>
      <Typography variant="h3" className={classes.typography}>
        {renderThis}
      </Typography>
    </Grid>
  );
};

export default EquationOutput;
