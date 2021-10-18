import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';
import React from 'react';
import { useStore } from '../hooks-store/store';

const useStyles = makeStyles({
  li: {
    listStyleType: 'none',
  },
  card: {
    marginLeft: '8px',
    marginRight: '8px',
    marginTop: '8px',
    marginBottom: '16px',
    '&:hover': {
      backgroundColor: deepOrange[100],
    },
  },
  cardContent: {
    minHeight: '90px',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  typography: {
    marginRight: 15,
  },
  equationTypographySmall: {
    marginRight: 15,
    fontSize: '1rem',
  },
  equationResultTypographySmall: {
    marginRight: 15,
    fontSize: '1.3rem',
    paddingTop: '0.7rem',
  },
  equationResultTypographyMed: {
    marginRight: 15,
    fontSize: '2.5rem',
    // paddingTop: '0.4rem',
  },
});

const HistoryCard = (props) => {
  const classes = useStyles();

  const dispatch = useStore()[1];

  const equationContent = props.equation;
  const equationResultContent = props.equationResult;

  // console.log(equationResultContent.length);

  let equationTypographyClass =
    equationContent.length > 23
      ? classes.equationTypographySmall
      : classes.typography;

  // let equationResultTypographyClass =
  //   equationResultContent.length > 8
  //     ? classes.equationResultTypographySmall
  //     : classes.typography;

  let equationResultTypographyClass;

  if (equationResultContent.length > 8) {
    equationResultTypographyClass = classes.equationResultTypographySmall;
    // equationResultTypographyClass = [classes.typographySmall, classes.borderRed].join(' ');
  } else if (
    equationResultContent.length === 8
    // equationResultContent.length < 8 &&
    // equationResultContent.length > 6
  ) {
    equationResultTypographyClass = classes.equationResultTypographyMed;
    // equationResultTypographyClass = [classes.typographyMed, classes.borderBlue].join(' ');
  } else {
    equationResultTypographyClass = classes.typography;
    // equationResultTypographyClass = [classes.typographyBig, classes.borderGreen].join(' ');
  }

  return (
    <li className={classes.li}>
      <Card
        className={classes.card}
        onClick={() => dispatch('RECALL_ENTRY', props.id)}
        raised
      >
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Typography variant="h6" className={equationTypographyClass}>
              {equationContent}
            </Typography>
            <Typography variant="h3" className={equationResultTypographyClass}>
              {equationResultContent}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </li>
  );
};

export default HistoryCard;
