import { Grid, makeStyles, Typography } from '@material-ui/core';
import HistoryCard from './HistoryCard';
import React, { useEffect } from 'react';
import { grey } from '@material-ui/core/colors';
import { useStore } from '../hooks-store/store';

const useStyles = makeStyles((theme) => ({
  ul: {
    margin: '0',
    padding: '0',
    height: '37.2rem',
    overflow: 'auto',
  },
  typographyGrid: {
    paddingTop: '1rem',
  },
  typography: {
    fontWeight: 500,
    letterSpacing: '0.11rem',
  },
  grid: {
    height: '81.2%',
    backgroundColor: grey[500],
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2),
    marginTop: 0,
    boxShadow: [theme.shadows[25]],
  },
}));

const HistoryCardArea = () => {
  const [state, dispatch] = useStore();

  const classes = useStyles();

  const RUN_ADD_ENTRY = state.runAddEntry;

  useEffect(() => {
    if (RUN_ADD_ENTRY) {
      dispatch('ADD_ENTRY');
    }
  }, [RUN_ADD_ENTRY, dispatch]);

  const historyCards = state.historyData.historyList.map((entry) => (
    <HistoryCard
      key={entry.key}
      id={entry.key}
      equation={entry.equation}
      equationResult={entry.equationResult}
    />
  ));

  const placeholder = (
    <Grid item xs={12} className={classes.typographyGrid}>
      <Typography className={classes.typography} align="center" variant="body1">
        There is no history yet...
      </Typography>
    </Grid>
  );

  const content =
    historyCards.length > 0 ? (
      <ul className={classes.ul}>{historyCards}</ul>
    ) : (
      placeholder
    );

  return (
    <Grid item xs={12} className={classes.grid} data-testid="historyCardArea">
      {content}
    </Grid>
  );
};

export default HistoryCardArea;
