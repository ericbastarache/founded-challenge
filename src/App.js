import React, { Component } from 'react';
import { connect } from 'react-redux';
import Gallery from './components/Gallery';
import Loading from './components/Loading';
import { loadTheImages } from './actions';
import { API_URL } from './constants';

class App extends Component {
  componentDidMount() {
    const { loadTheImages } = this.props;
    loadTheImages(API_URL);
  }
  render() {
    const { images, loading } = this.props;
    console.log('images', images);
    return (
      <div className="App">
        {loading ? <Loading /> 
          : <Gallery {...images}/>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state', state);
  return {
    images: state.image.imageList,
    loading: state.image.loading
  }
}

export default connect(mapStateToProps, { loadTheImages })(App);
