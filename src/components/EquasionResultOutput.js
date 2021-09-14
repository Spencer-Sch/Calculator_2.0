import { Grid, makeStyles, Typography } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';
import React from 'react';

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
  typography: {
    // color: red['A700'],
    fontWeight: 900,
    paddingRight: 12,
  },
}));

const EquasionResultOutput = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.grid}>
      <Typography variant="h1" align="right" className={classes.typography}>
        12
      </Typography>
    </Grid>
  );
};

export default EquasionResultOutput;
