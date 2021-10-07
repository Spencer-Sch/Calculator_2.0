import { Grid, makeStyles, Typography } from '@material-ui/core';
import HistoryCard from './HistoryCard';
import React from 'react';
import { grey } from '@material-ui/core/colors';
import { useStore } from '../hooks-store/store';

const useStyles = makeStyles((theme) => ({
  ul: {
    margin: '0',
    padding: '0',
    height: '38.4rem',
    overflowX: 'hidden',
    overflowY: 'scroll',
  },
  typographyGrid: {
    paddingTop: '1rem',
  },
  typography: {
    fontWeight: 500,
    letterSpacing: '0.11rem',
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
    <Grid item xs={12} className={classes.grid}>
      {content}
    </Grid>
  );
};

export default HistoryCardArea;
