import React from 'react';
import { connect } from 'react-redux';

import { Grid, Cell, Button } from 'react-foundation';
import StyleWrapper from './style';

import { CartItem } from '../../components/CartItem';

class Cart extends React.Component {
  render() {
    var itemsInCart = 0;
    var total = 0;

    // count number of items in the cart
    Object.keys(this.props.cart).forEach(size => {
      itemsInCart += this.props.cart[size].length;
      total +=
        (this.props.cart[size][0].price / 100) * this.props.cart[size].length;
    });

    return (
      <StyleWrapper>
        <Grid className="display">
          <Cell
            small={10}
            large={4}
            offsetOnLarge={4}
            className="cart-container"
          >
            <h1>Your Cart</h1>
            {Object.keys(this.props.cart).map((size, key) => {
              return (
                <CartItem
                  key={key}
                  size={size}
                  item={this.props.cart[size][0]}
                  quantity={this.props.cart[size].length}
                />
              );
            })}

            {itemsInCart === 0 ? (
              <p>
                Your cart is empty. Go check our amazing selection of the day!
              </p>
            ) : (
              <Button className="pay" onClick={() => alert('Payment success!')}>
                Proceed to checkout - ${total}
              </Button>
            )}
          </Cell>
        </Grid>
      </StyleWrapper>
    );
  }
}

const mapStateToProps = ({ cart }) => ({
  cart: cart.items
});

export default connect(
  mapStateToProps,
  null
)(Cart);
