import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'emotion';
import { connect } from 'react-redux';
import {
  Input,
  Paper,
  FormControl,
} from '@material-ui/core';
import { addFilter } from '../../../services/storage/actions';

const FilterInput = ({ onSearch }) => {
  const handleText = event => {
    onSearch(event.target.value);
  };
  return (
    <Paper
      className={css`
        margin-top: 10px;
        margin-bottom: 10px;
      `}
    >
      <FormControl fullWidth>
        <Input
          className={css`
            padding: 5px 10px;
          `}
          placeholder="Buscar..."
          inputProps={{ 'aria-label': 'search countries' }}
          onChange={handleText}
        />
      </FormControl>
    </Paper>
  )
}

FilterInput.propTypes = {
  onSearch: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    filter: state.filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: data => {
      dispatch(addFilter(data))
    }
  }
}

const Filter = connect(mapStateToProps, mapDispatchToProps)(FilterInput)

export default Filter