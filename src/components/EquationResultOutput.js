import { Grid, makeStyles, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import React, { useEffect } from 'react';

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
    fontWeight: 900,
    paddingRight: 12,
    fontSize: '5rem',
  },
  typographySmall: {
    fontWeight: 900,
    paddingRight: 12,
    fontSize: '3rem',
  },
}));

const EquationResultOutput = () => {
  const [state, dispatch] = useStore();

  const RUN_CALCULATE = state.runCalculate;
  const RENDER_THIS = state.renderData.renderEquationResult;

  const classes = useStyles();

  let typographyClass = classes.typographyBig;

  useEffect(() => {
    if (RUN_CALCULATE) {
      dispatch('CALCULATE');
      dispatch('ADD_ENTRY');
    }
  }, [RUN_CALCULATE, dispatch]);

  return (
    <Grid item xs={12} className={classes.grid}>
      <Typography variant="h1" align="right" className={typographyClass}>
        {RENDER_THIS}
      </Typography>
    </Grid>
  );
};

export default EquationResultOutput;
