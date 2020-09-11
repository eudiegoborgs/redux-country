import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'emotion';
import {Grid, Paper, Typography} from '@material-ui/core';

const CountryCard = ({ name, nativeName, capital, flag }) => (
  <Grid item xs={4}>
    <Paper className={css`
      padding: 10px;
    `}>
      <Typography variant="h5" component="h1">
        {` ${name} ${flag.emoji}`}
      </Typography>
      <Typography variant="h6" gutterBottom>
        <em>{nativeName}</em>
      </Typography>
      <Typography gutterBottom>
        Capital: {capital}
      </Typography>
    </Paper>
  </Grid>
);

CountryCard.propTypes = {
  name: PropTypes.string.isRequired,
  nativeName: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  flag: PropTypes.shape({
    emoji: PropTypes.string.isRequired
  })
}

export default CountryCard