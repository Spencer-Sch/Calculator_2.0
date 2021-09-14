import { Grid, makeStyles } from '@material-ui/core';
import HistoryCard from './HistoryCard';
import React from 'react';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  grid: {
    height: '84%',
    backgroundColor: grey[500],
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2),
    marginTop: 0,
    boxShadow: `inset 0px 12px 8px -10px ${grey[600]}, inset 0px -16px 8px -10px ${grey[600]}, inset 12px 0px 8px -10px ${grey[600]}, inset -16px 0px 8px -10px ${grey[600]}`,
  },
}));

const HistoryCardArea = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.grid}>
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
    </Grid>
  );
};

export default HistoryCardArea;
