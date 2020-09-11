import { connect } from 'react-redux';
import { setCountries } from '../../../services/storage/actions';
import CountriesList from '../countries-list';

const mapStateToProps = state => {
  return {
    countries: state.countries,
    filter: state.filter,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadCountries: data => {
      dispatch(setCountries(data));
    },
  };
}

const VisibleCountriesList = connect(mapStateToProps, mapDispatchToProps)(CountriesList);

export default VisibleCountriesList;