import * as constants from '../constants';
import axios from 'axios';

export const loadingImages = (bool) => {
  return {
    type: constants.LOADING_IMAGES,
    loading: bool
  }
}

export const setCatsActive = (bool) => {
  return {
    type: constants.SET_CATS_ACTIVE,
    catsActive: bool
  }
}

export const setSharksActive = (bool) => {
  return {
    type: constants.SET_SHARKS_ACTIVE,
    sharksActive: bool
  }
}

export const setBothActive = (bool) => {
  return {
    type: constants.SET_BOTH_ACTIVE,
    both: bool
  }
}

export const loadImages = images => {
  return {
    type: constants.LOAD_IMAGES,
    payload: images
  }
}

export const loadTheImages = (url) => {
  return (dispatch) => {
    dispatch(loadingImages(true))
    setTimeout(() => {
      axios.get(url)
      .then(response => {
        if(url.indexOf('cats') > -1) {
          dispatch(setCatsActive(true));
        } else if (url.indexOf('sharks') > -1) {
          dispatch(setSharksActive(true));
        } else if(url.indexOf('both') > -1) {
          dispatch(setBothActive(true))
        }
        dispatch(loadImages(response))
      })
      dispatch(loadingImages(false));
    }, 2000);
  }
}

export const navigateBackward = (index) => {
  return {
    type: constants.NAVIGATE_BACKWARD
  }
}

export const navigateForward = (index) => {
  return {
    type: constants.NAVIGATE_FORWARD
  }
}

