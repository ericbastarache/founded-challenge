import * as constants from '../../constants';

const INITIAL_STATE = {
  imageList: [],
  loading: false,
  index: 0,
  catsActive: true,
  sharksActive: false
};

const imageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.LOAD_IMAGES:
      return {
        ...state,
        imageList: action.payload.data,
        catsActive: action.catsActive
      }
    case constants.LOADING_IMAGES:
      return {
        ...state,
        loading: action.loading,
        catsActive: action.catsActive,
        sharksActive: action.sharksActive
      }
    case constants.NAVIGATE_FORWARD:
      return {
        ...state,
        index: state.index + 1
      }
    case constants.NAVIGATE_BACKWARD:
      return {
        ...state,
        index: state.index - 1
      }
    default:
      return state;
  }
}

export default imageReducer;