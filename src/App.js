import React from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles, Paper, Grid } from '@material-ui/core';
import HistorySection from './components/HistorySection';
import CalculatorSection from './components/CalculatorSection';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: '#ccc',
    marginTop: '3rem',
    padding: '1rem',
    height: '80vh',
  },
  grid: {
    height: '100%',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
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
