import { Grid, makeStyles } from '@material-ui/core';
import HistoryCard from './HistoryCard';
import React from 'react';
import { grey } from '@material-ui/core/colors';
import { useStore } from '../hooks-store/store';

const useStyles = makeStyles((theme) => ({
  ul: {
    margin: '0',
    padding: '0',
  },
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

  const state = useStore()[0];

  const historyCards = state.historyList.map((entry) => (
    <HistoryCard
      key={entry.key}
      equasion={entry.equasion}
      equasionResult={entry.equasionResult}
    />
  ));

  return (
    <Grid item xs={12} className={classes.grid}>
      <ul className={classes.ul}>{historyCards}</ul>
    </Grid>
  );
};

export default HistoryCardArea;
