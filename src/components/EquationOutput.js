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

  const OPERAND1 = state.operand1;
  const OPERAND2 = state.operand2;
  const OPERATOR = state.operator;
  const EQUATION_RESULT = state.equationResult;
  const RUN_CALCULATE = state.runCalculate;
  const CAME_FROM_EQUALS = state.cameFromEquals;

  const classes = useStyles();

  let renderThis;

  // if (state.equationResult) {
  if (RUN_CALCULATE) {
    setTimeout(() => {
      if (CAME_FROM_EQUALS) {
        renderThis = `${OPERAND1} ${OPERATOR} ${OPERAND2} = `;
      } else {
        renderThis = `${OPERAND1} ${OPERATOR}`;
      }
    }, 80);
    // if (EQUATION_RESULT.length > 14) {
    //   typographyClass = classes.typographySmall;
    // }
  } else if (OPERAND2 && OPERATOR === '=') {
    renderThis = `${OPERAND1} ${OPERATOR} ${OPERAND2}`;
  } else if (OPERAND2) {
    renderThis = `${OPERAND1} ${OPERATOR} ${OPERAND2} = `;
  } else if (OPERATOR) {
    renderThis = `${OPERAND1} ${OPERATOR}`;
  } else if (OPERAND1) {
    renderThis = `${OPERAND1}`;
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
