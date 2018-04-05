import { combineReducers } from 'redux';
import imageReducer from './image/index';

const rootReducer = combineReducers({
  image: imageReducer
});

export default rootReducer;