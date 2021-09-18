import { Grid, makeStyles, Typography } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';
import React, { useEffect } from 'react';
import calculate from '../constants/calculateLogic';

import { useStore } from '../hooks-store/store';

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 0,
    marginBottom: 16,
    backgroundColor: grey[500],
    borderRadius: theme.shape.borderRadius,
    boxShadow: `inset 0px 12px 8px -10px ${grey[600]}, inset 0px -16px 8px -10px ${grey[600]}, inset 12px 0px 8px -10px ${grey[600]}, inset -16px 0px 8px -10px ${grey[600]}`,
  },
  typographyBig: {
    // color: red['A700'],
    fontWeight: 900,
    paddingRight: 12,
    fontSize: '5rem',
  },
  typographySmall: {
    // color: red['A700'],
    fontWeight: 900,
    paddingRight: 12,
    fontSize: '3rem',
  },
}));

const EquationResultOutput = () => {
  const [state, dispatch] = useStore();

  const classes = useStyles();

  useEffect(() => {
    if (state.runCalculate) {
      dispatch('CALCULATE');
    }
  }, [state, dispatch]);

  let renderThis;
  let typographyClass = classes.typographyBig;

  if (state.equasionResult) {
    renderThis = state.equasionResult;
    if (state.equasionResult.length > 14) {
      typographyClass = classes.typographySmall;
    }
  } else if (state.operandString) {
    renderThis = state.operandString;
  } else if (state.operand1) {
    renderThis = state.operand1;
  } else {
    renderThis = state.operand2;
  }

  return (
    <Grid item xs={12} className={classes.grid}>
      <Typography variant="h1" align="right" className={typographyClass}>
        {renderThis}
      </Typography>
    </Grid>
  );
};

export default EquationResultOutput;
