import React, { useEffect } from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles, Paper, Grid } from '@material-ui/core';
import HistorySection from '../components/HistorySection/HistorySection';
import CalculatorSection from '../components/CalculatorSection/CalculatorSection';
import { useStore } from '../hooks-store/store';
import { handleKeyDown } from '../constants/handleKeyDownLogic/handleKeyDownLogic';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '80vh',
    minWidth: '475px',
    '@media (max-width: 1264px)': {
      maxWidth: '80vw',
    },
  },
  paper: {
    backgroundColor: '#ccc',
    marginTop: '3rem',
    padding: '1rem',
    height: '90vh',
    minHeight: '44rem',
    '@media (max-height: 800px)': {
      marginTop: '1rem',
    },
  },
  grid: {
    height: '100%',
  },
}));

function App() {
  const dispatch = useStore(false)[1];

  useEffect(() => {
    window.addEventListener('keydown', (event) =>
      handleKeyDown(dispatch, event)
    );
  });

  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container} data-testid="app">
      <Paper className={classes.paper} elevation={4}>
        <Grid container className={classes.grid} spacing={2}>
          <CalculatorSection />
          <HistorySection />
        </Grid>
      </Paper>
    </Container>
  );
}

export default App;
