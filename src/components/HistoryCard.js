import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
  makeStyles,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  li: {
    listStyleType: 'none',
  },
  card: {
    marginLeft: '8px',
    marginRight: '8px',
    marginTop: '8px',
    marginBottom: '16px',
  },
  cardContent: {
    maxHeight: '100px',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  typography: {
    marginRight: 15,
  },
});

const HistoryCard = (props) => {
  const classes = useStyles();

  return (
    <li className={classes.li}>
      <Card className={classes.card} raised>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Typography variant="h6" className={classes.typography}>
              {props.equasion}
            </Typography>
            <Typography variant="h3" className={classes.typography}>
              {props.equasionResult}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </li>
  );
};

export default HistoryCard;
