import React from 'react';
import { connect } from 'react-redux';
import Arrow from '../Arrow';
import Button from '../Button';
import Image from '../Image';
import { loadTheImages } from '../../actions';
import { NAVIGATE_BACKWARD, NAVIGATE_FORWARD, API_URL } from '../../constants';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { imageList, index, dispatch, catsActive, sharksActive } = this.props;
    return (
      <div>
      <div className="top-buttons">
        <Button onClick={this.getCats} className={catsActive ? 'active' : ''}>Cats</Button>
        <Button onClick={this.getSharks} className={sharksActive ? 'active' : ''}>Sharks</Button>
      </div>
        <div className="gallery-wrapper">
          <div className="button-left">
            <Button onClick={this.pageBackward}>
              <Arrow icon="chevron-left" />
            </Button>
            </div>
            <Image src={imageList ? imageList[index] : ''} />
          <div className="button-right">
            <Button onClick={this.pageForward}>
              <Arrow icon="chevron-right" />
             </Button>
          </div>
        </div>
      </div>
    );
  }

  getSharks = () => {
    const { dispatch } = this.props;
    dispatch(loadTheImages(`${API_URL}/?=sharks`));
  }

  getCats = () => {
    const { dispatch } = this.props;
    dispatch(loadTheImages(`${API_URL}/?=cats`));
  }

  pageBackward = () => {
    const { imageList, index, dispatch } = this.props;
    if (index < 1) {
      return;
    }
    dispatch({type: NAVIGATE_BACKWARD});
  }

  pageForward = () => {
    const { imageList, index, dispatch } = this.props;
    if (index >= imageList.length -1) {
      return;
    }
    dispatch({type: NAVIGATE_FORWARD});
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
};

const mapStateToProps = state => {
  console.log('state', state);
  return {
    imageList: state.image.imageList,
    index: state.image.index,
    catsActive: state.image.catsActive,
    sharksActive: state.image.sharksActive
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);