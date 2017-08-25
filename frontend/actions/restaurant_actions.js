import * as APIUtil from '../util/restaurant_api_util';

export const RECEIVE_ALL_RESTAURANTS = 'RECEIVE_ALL_RESTAURANTS';
export const RECEIVE_SINGLE_RESTAURANT = 'RECEIVE_SINGLE_RESTAURANT';
export const RECEIVE_RESTAURANT_ERRORS = 'RECEIVE_ERRORS';
export const REMOVE_RESTAURANT_ERRORS = 'REMOVE_ERRORS';

export const receiveAllRestaurants = (restaurants) => {
  return {
    type: RECEIVE_ALL_RESTAURANTS,
    restaurants
  };
};

export const receiveSingleRestaurant = (restaurant) => {
  return {
    type: RECEIVE_SINGLE_RESTAURANT,
    restaurant
  };
};

export const receiveRestaurantErrors = (errors) => {
  return {
      type: RECEIVE__RESTAURANT_ERRORS,
      errors: errors.responseJSON
  };
};

export const removeRestaurantErrors = (errors) => {
  return {
    type: REMOVE_RESTAURANT_ERRORS,
    errors
  };
};


export const createRestaurant = restaurant => dispatch => {
  return APIUtil.createRestaurant(restaurant).then(restaurant => (
    dispatch(receiveSingleRestaurant(restaurant))));
};