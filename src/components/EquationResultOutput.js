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
  typography: {
    fontWeight: 900,
    paddingRight: 12,
    fontSize: 'calc( 50px + (24 - 16) * (100vw - 400px) / (800 - 400) )',
    // fontSize: '5rem',
    // '@media (max-width: 1250px)': {
    //   fontSize: '3.8rem',
    // },
    // '@media (max-width: 950px)': {
    //   fontSize: '3rem',
    // },
  },
  typographySmall: {
    fontWeight: 900,
    paddingRight: 12,
    fontSize: '3rem',
  },
}));

const EquationResultOutput = () => {
  const [state, dispatch] = useStore();

  const classes = useStyles();

  const RUN_CALCULATE = state.runCalculate;

  const content = state.renderData.renderEquationResult;

  let typographyClass =
    content.length >= 12 ? classes.typographySmall : classes.typography;

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
