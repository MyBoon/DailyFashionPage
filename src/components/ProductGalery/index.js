import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Grid, Cell } from 'react-foundation';
import StyleWrapper from './style';

class ProductGalery extends Component {
  state = {
    currentPicture: 0
  };

  cyclePictures() {
    const next =
      this.state.currentPicture < this.props.images.length - 1
        ? this.state.currentPicture + 1
        : 0;
    this.setState({ currentPicture: next });
  }

  componentDidMount() {
    // we create a JS interval to cycle through the pictures
    this.intervalId = setInterval(() => {
      this.cyclePictures();
    }, 3500);
  }

  componentWillUnmount() {
    // when the componenent is unmounted
    // we cancel the interval to not drain erformances
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <StyleWrapper>
        <Grid className="display">
          <Cell small={12} large={12}>
            <img
              className="animated fadeIn slow"
              src={this.props.images[this.state.currentPicture].url}
              alt={'image ' + this.state.currentPicture}
              onClick={this.cyclePictures.bind(this)}
            />
          </Cell>
        </Grid>
      </StyleWrapper>
    );
  }
}

ProductGalery.propTypes = {
  images: PropTypes.array.isRequired
};

export { ProductGalery };
