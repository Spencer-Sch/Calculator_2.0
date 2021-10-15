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
  typography: {
    fontWeight: 900,
    paddingRight: 12,
  },
}));

const EquationOutput = () => {
  const state = useStore()[0];

  const RENDER_THIS = state.renderData.renderEquation;

  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.grid}>
      <Typography
        variant="h3"
        className={classes.typography}
        data-testid="equationOutputH3"
      >
        {RENDER_THIS}
      </Typography>
    </Grid>
  );
};

export default EquationOutput;
