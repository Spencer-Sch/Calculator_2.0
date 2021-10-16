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
    minHeight: '5.8rem',
    marginBottom: 16,
    backgroundColor: grey[500],
    borderRadius: theme.shape.borderRadius,
    boxShadow: [theme.shadows[25]],
  },
  typographyBig: {
    fontWeight: 900,
    paddingRight: 12,
    fontSize: '5rem',
  },
  typographySmall: {
    fontWeight: 900,
    paddingRight: 12,
    fontSize: '4rem',
  },
}));

const EquationResultOutput = () => {
  const [state, dispatch] = useStore();

  const classes = useStyles();

  const RUN_CALCULATE = state.runCalculate;

  const content = state.renderData.renderEquationResult;

  let typographyClass =
    content.length >= 12 ? classes.typographySmall : classes.typographyBig;

  useEffect(() => {
    if (RUN_CALCULATE) {
      dispatch('CALCULATE');
    }
  }, [RUN_CALCULATE, dispatch]);

  return (
    <Grid item xs={12} className={classes.grid}>
      <Typography variant="h1" align="right" className={typographyClass}>
        {content}
      </Typography>
    </Grid>
  );
};

export default EquationResultOutput;
