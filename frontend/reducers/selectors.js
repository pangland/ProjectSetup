import values from 'lodash/values';

export const selectAllRestaurants = state => {
  return values(state);
};

export const filterRestaurants = (varA, varB) => {
  return varA.filter((stuff) => {
    return stuff.indexOf(varB) !== -1;
  });
};