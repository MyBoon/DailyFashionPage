import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Grid, Cell } from 'react-foundation';
import { ProductGalery } from '../../components/ProductGalery';

import StyleWrapper from './style';

class CartItem extends Component {
  render() {
    return (
      <StyleWrapper>
        <Grid className="display">
          {/* Show item picture */}
          <Cell small={3} large={3}>
            <ProductGalery images={this.props.item.images} />
          </Cell>

          {/* Show item info (title, description) */}
          <Cell small={7} large={7}>
            <p className="item-title">
              {this.props.item.name} - Size {this.props.size}
            </p>
            <p className="item-description">{this.props.item.description}</p>
          </Cell>

          {/* Show item quantity */}
          <Cell small={2} large={2}>
            <p className="item-quantity">{this.props.quantity}</p>
          </Cell>
        </Grid>
      </StyleWrapper>
    );
  }
}

CartItem.propTypes = {
  size: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired
};

export { CartItem };
