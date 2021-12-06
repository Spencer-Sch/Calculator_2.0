import { Grid, makeStyles, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import React, { useEffect } from 'react';

import { useStore } from '../../hooks-store/store';

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
    '@media (min-width: 1800px)': {
      fontSize: '4.6rem',
    },
    '@media (max-width: 1800px)': {
      fontSize: '4.6rem',
    },
    '@media (max-width: 1000px)': {
      fontSize: '4.6rem',
    },
    '@media (max-width: 949px)': {
      fontSize: 'calc( 60px + (24 - 16) * (100vw - 400px) / (800 - 400) )',
    },
    '@media (max-width: 475px)': {
      fontSize: '3.8rem',
    },
  },
  typographyMed: {
    fontWeight: 900,
    paddingRight: 12,
    '@media (min-width: 1800px)': {
      fontSize: '4.6rem',
    },
    '@media (max-width: 1800px)': {
      fontSize: '4.6rem',
    },
    '@media (max-width: 1000px)': {
      fontSize: 'calc( 52px + (24 - 16) * (100vw - 400px) / (800 - 400) )',
    },
    '@media (max-width: 800px)': {
      fontSize: 'calc( 45px + (24 - 16) * (100vw - 400px) / (800 - 400) )',
    },
    '@media (max-width: 750px)': {
      fontSize: 'calc( 42px + (24 - 16) * (100vw - 400px) / (800 - 400) )',
    },
    '@media (max-width: 650px)': {
      fontSize: 'calc( 39px + (24 - 16) * (100vw - 400px) / (800 - 400) )',
    },
    '@media (max-width: 550px)': {
      fontSize: 'calc( 39px + (24 - 16) * (100vw - 400px) / (800 - 400) )',
    },
    '@media (max-width: 475px)': {
      fontSize: '2.54rem',
    },
  },
  typographySmall: {
    fontWeight: 900,
    paddingRight: 12,
    '@media (min-width: 1800px)': {
      fontSize: '2.8rem',
    },
    '@media (max-width: 1800px)': {
      fontSize: '2.8rem',
    },
    '@media (max-width: 1264px)': {
      fontSize: '2.7rem',
    },
    '@media (max-width: 1000px)': {
      fontSize: 'calc( 27px + (24 - 16) * (100vw - 400px) / (800 - 400) )',
    },
    '@media (max-width: 949px)': {
      fontSize: 'calc( 25.5px + (24 - 16) * (100vw - 400px) / (800 - 400) )',
    },
    '@media (max-width: 800px)': {
      fontSize: 'calc( 21px + (24 - 16) * (100vw - 400px) / (800 - 400) )',
    },
    '@media (max-width: 650px)': {
      fontSize: '1.45rem',
    },
  },
  // // Small
  // borderRed: {
  //   border: 'red 3px solid',
  // },
  // // Med
  // borderBlue: {
  //   border: 'blue 3px solid',
  // },
  // // Big
  // borderGreen: {
  //   border: 'green 3px solid',
  // },
}));

const EquationResultOutput = () => {
  const [state, dispatch] = useStore();

  const classes = useStyles();

  const RUN_CALCULATE = state.runCalculate;

  const content = state.renderData.renderEquationResult;

  let typographyClass;

  if (content.length >= 12) {
    typographyClass = classes.typographySmall;
    // typographyClass = [classes.typographySmall, classes.borderRed].join(' ');
  } else if (content.length < 12 && content.length > 5) {
    typographyClass = classes.typographyMed;
    // typographyClass = [classes.typographyMed, classes.borderBlue].join(' ');
  } else {
    typographyClass = classes.typographyBig;
    // typographyClass = [classes.typographyBig, classes.borderGreen].join(' ');
  }

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
