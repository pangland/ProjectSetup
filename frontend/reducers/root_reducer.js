import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import restaurantReducer from './restaurant_reducer';
import errorsReducer from './errors_reducer';
import searchReducer from './search_reducer';
import reviewReducer from './review_reducer';
import userReducer from './user_reducer';

export default combineReducers({
  session: sessionReducer,
  restaurants: restaurantReducer,
  errors: errorsReducer,
  search: searchReducer,
  review: reviewReducer,
  user: userReducer
});
