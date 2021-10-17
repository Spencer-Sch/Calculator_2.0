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
    '@media (min-width: 1800px)': {
      fontSize: '4.9rem',
    },
    '@media (max-width: 1800px)': {
      fontSize: 'calc( 50px + (24 - 16) * (100vw - 400px) / (800 - 400) )',
    },
    '@media (max-width: 1000px)': {
      fontSize: 'calc( 45px + (24 - 16) * (100vw - 400px) / (800 - 400) )',
    },
    '@media (max-width: 949px)': {
      fontSize: '4.5rem',
    },
    '@media (max-width: 800px)': {
      fontSize: 'calc( 53px + (24 - 16) * (100vw - 400px) / (800 - 400) )',
    },
    '@media (max-width: 650px)': {
      fontSize: 'calc( 45px + (24 - 16) * (100vw - 400px) / (800 - 400) )',
    },
    '@media (max-width: 550px)': {
      fontSize: 'calc( 40px + (24 - 16) * (100vw - 400px) / (800 - 400) )',
    },
    '@media (max-width: 475px)': {
      fontSize: '2.58rem',
    },
  },
  typographySmall: {
    fontWeight: 900,
    paddingRight: 12,
    fontSize: 'calc( 19px + (24 - 16) * (100vw - 400px) / (800 - 400) )',
    '@media (min-width: 1800px)': {
      fontSize: '2.7rem',
    },
    '@media (max-width: 1800px)': {
      fontSize: '2.7rem',
    },
    '@media (max-width: 1275px)': {
      fontSize: 'calc( 24px + (24 - 16) * (100vw - 400px) / (800 - 400) )',
    },
    '@media (max-width: 1000px)': {
      fontSize: 'calc( 21px + (24 - 16) * (100vw - 400px) / (800 - 400) )',
    },
    '@media (max-width: 949px)': {
      fontSize: 'calc( 35px + (24 - 16) * (100vw - 400px) / (800 - 400) )',
    },
    '@media (max-width: 800px)': {
      fontSize: 'calc( 28px + (24 - 16) * (100vw - 400px) / (800 - 400) )',
    },
    '@media (max-width: 650px)': {
      fontSize: 'calc( 25px + (24 - 16) * (100vw - 400px) / (800 - 400) )',
    },
    '@media (max-width: 550px)': {
      fontSize: 'calc( 22px + (24 - 16) * (100vw - 400px) / (800 - 400) )',
    },
    '@media (max-width: 475px)': {
      fontSize: '1.45rem',
    },
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
