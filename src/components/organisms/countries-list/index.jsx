import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from '@material-ui/core';
import CountryCard from '../../molecules/country-card';
import { CountriesClient } from "../../../services/countries-client";

const isVisibleCountries = (countries, filter) => {
  if (!countries) {
    return [];
  }
  if (!filter) {
    return countries;
  }
  return countries.filter(
    country => country.name.includes(filter) ||
    country.nativeName.includes(filter) ||
    country.capital.includes(filter)
  );
}

const CountriesList = ({ countries, filter, loadCountries }) => {
  const getCountries = async () => {
    const result = await CountriesClient.get();
    loadCountries(result);
  };

  React.useEffect(() => {
    getCountries();
  }, [countries]);

  return (
    <Grid container spacing={3}>
      {isVisibleCountries(countries, filter).map((country, index) => (
        <CountryCard key={country.name} {...country} />
      ))}
    </Grid>
  )
}

CountriesList.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      nativeName: PropTypes.string.isRequired,
      capital: PropTypes.string.isRequired,
      flag: PropTypes.shape({
        emoji: PropTypes.string.isRequired
      })
    }).isRequired
  ).isRequired,
  filter: PropTypes.string,
  loadCountries: PropTypes.func.isRequired
}

export default CountriesList