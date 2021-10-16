import { Grid, makeStyles, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import React from 'react';
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
    boxShadow: [theme.shadows[25]],
  },
  typographyBig: {
    fontWeight: 900,
    paddingRight: 12,
    fontSize: '3rem',
  },
  typographySmall: {
    fontWeight: 900,
    paddingRight: 12,
    fontSize: '1.8rem',
  },
}));

const EquationOutput = () => {
  const state = useStore()[0];

  const content = state.renderData.renderEquation;

  const classes = useStyles();

  let typographyClass =
    content.length >= 23 ? classes.typographySmall : classes.typographyBig;

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
