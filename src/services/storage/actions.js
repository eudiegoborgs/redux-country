export const ADD_FILTER = 'ADD_FILTER';
export const SET_COUNTRIES = 'SET_COUNTRIES';

export function addFilter(data) {
  return { type: ADD_FILTER, data };
}

export function setCountries(data) {
  return { type: SET_COUNTRIES, data };
}