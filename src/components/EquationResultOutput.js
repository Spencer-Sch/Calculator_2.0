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

  const OPERAND1 = state.operand1;
  const OPERAND2 = state.operand2;
  const OPERAND_STRING = state.operandString;
  const EQUATION_RESULT = state.equationResult;
  const RUN_CALCULATE = state.runCalculate;
  const RENDER_THIS = state.renderData.renderEquationResult;

  // console.log('From inside ERO: ', RENDER_THIS);

  const classes = useStyles();

  // let renderThis;
  let typographyClass = classes.typographyBig;

  useEffect(() => {
    if (RUN_CALCULATE) {
      dispatch('CALCULATE');
      dispatch('ADD_ENTRY');
    }
  }, [RUN_CALCULATE, dispatch]);

  // useEffect(() => {
  //   renderThis = RENDER_THIS;
  // }, [RENDER_THIS, dispatch]);

  /////////////////////////////////////////////////////////////

  // if (EQUATION_RESULT) {
  //   renderThis = EQUATION_RESULT;
  //   if (EQUATION_RESULT.length > 14) {
  //     typographyClass = classes.typographySmall;
  //   }
  // } else if (OPERAND_STRING) {
  //   renderThis = OPERAND_STRING;
  // } else if (OPERAND1) {
  //   renderThis = OPERAND1;
  // } else {
  //   renderThis = OPERAND2;
  // }
  /////////////////////////////////////////////////////////////

  return (
    <Grid item xs={12} className={classes.grid}>
      <Typography variant="h1" align="right" className={typographyClass}>
        {RENDER_THIS}
      </Typography>
    </Grid>
  );
};

export default EquationResultOutput;
