import { Grid, makeStyles, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import React from 'react';
import { useStore } from '../../hooks-store/store';

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    textAlign: 'right',
    padding: 0,
    minHeight: '4rem',
    marginBottom: 16,
    backgroundColor: grey[500],
    borderRadius: theme.shape.borderRadius,
    boxShadow: [theme.shadows[25]],
  },
  typographyBig: {
    fontWeight: 900,
    paddingRight: 12,
    paddingLeft: 12,
    '@media (min-width: 1275px)': {
      fontSize: '2.6rem',
    },
    '@media (max-width: 1275px)': {
      fontSize: '2.6rem',
    },
    '@media (max-width: 800px)': {
      fontSize: '2.6rem',
    },
    '@media (max-width: 750px)': {
      fontSize: '2.4rem',
    },
    '@media (max-width: 650px)': {
      fontSize: '2rem',
    },
  },
  typographyMed: {
    fontWeight: 900,
    paddingRight: 12,
    paddingLeft: 12,
    '@media (min-width: 1800px)': {
      fontSize: '2.8rem',
    },
    '@media (max-width: 1800px)': {
      fontSize: '2.8rem',
    },
    '@media (max-width: 1000px)': {
      fontSize: '2.3rem',
    },
    '@media (max-width: 800px)': {
      fontSize: 'calc( 27px + (24 - 16) * (100vw - 400px) / (800 - 400) )',
    },
    '@media (max-width: 750px)': {
      fontSize: 'calc( 27px + (24 - 16) * (100vw - 400px) / (800 - 400) )',
    },
    '@media (max-width: 475px)': {
      fontSize: '1.8rem',
    },
  },
  typographySmall: {
    fontWeight: 900,
    paddingRight: 12,
    paddingLeft: 12,
    '@media (min-width: 1800px)': {
      fontSize: '1.8rem',
    },
    '@media (max-width: 1800px)': {
      fontSize: '1.7rem',
    },
    '@media (max-width: 1264px)': {
      fontSize: 'calc( 14.5px + (24 - 16) * (100vw - 400px) / (800 - 400) )',
    },
    '@media (max-width: 1000px)': {
      fontSize: '1.8rem',
    },
    '@media (max-width: 800px)': {
      fontSize: 'calc( 21px + (24 - 16) * (100vw - 400px) / (800 - 400) )',
    },
    '@media (max-width: 750px)': {
      fontSize: 'calc( 21px + (24 - 16) * (100vw - 400px) / (800 - 400) )',
    },
    '@media (max-width: 650px)': {
      fontSize: 'calc( 19.5px + (24 - 16) * (100vw - 400px) / (800 - 400) )',
    },
    '@media (max-width: 550px)': {
      fontSize: '1.4rem',
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

const EquationOutput = () => {
  const state = useStore()[0];

  const content = state.renderData.renderEquation;

  const classes = useStyles();

  let typographyClass;

  if (content.length >= 21) {
    typographyClass = classes.typographySmall;
    // typographyClass = [classes.typographySmall, classes.borderRed].join(' ');
  } else if (content.length < 21 && content.length > 12) {
    typographyClass = classes.typographyMed;
    // typographyClass = [classes.typographyMed, classes.borderBlue].join(' ');
  } else {
    typographyClass = classes.typographyBig;
    // typographyClass = [classes.typographyBig, classes.borderGreen].join(' ');
  }

  return (
    <Grid item xs={12} className={classes.grid}>
      <Typography
        variant="h3"
        className={typographyClass}
        data-testid="equationOutputH3"
      >
        {content}
      </Typography>
    </Grid>
  );
};

export default EquationOutput;
