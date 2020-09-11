import {
  ADD_FILTER,
  SET_COUNTRIES,
} from './actions';

function reducer(state = {}, action) {
  switch (action.type) {
    case ADD_FILTER:
      return {
        ...state,
        filter: action.data
      }
    case SET_COUNTRIES:
      return {
        ...state,
        countries: action.data
      }
    default:
      return state
  }
}

export default reducer;