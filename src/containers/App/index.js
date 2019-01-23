import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../Home';
import Cart from '../Cart';

import { Menu, MenuItem } from 'react-foundation';
import StyleWrapper from './style';

import { Chat } from '../../components/Chat';

class App extends React.Component {
  state = {
    chatOpen: false
  };

  render() {
    var itemsInCart = 0;

    // count number of items in the cart
    Object.keys(this.props.cart).forEach(size => {
      itemsInCart += this.props.cart[size].length;
    });

    return (
      <StyleWrapper>
        <Menu>
          <MenuItem isActive={this.props.currentPath === '/'}>
            <Link to={'/'}>Home</Link>
          </MenuItem>
          <MenuItem>
            <Link
              to={{ hash: '' }}
              onClick={() => {
                this.setState({ chatOpen: true });
              }}
            >
              Chat With Us
            </Link>
          </MenuItem>
          <MenuItem isActive={this.props.currentPath === '/cart'}>
            <Link to={'/cart'}>
              Your Cart {itemsInCart > 0 ? '(' + itemsInCart + ')' : <div />}
            </Link>
          </MenuItem>
        </Menu>
        <main>
          <Switch>
            {/* define routes */}
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/cart'} component={Cart} />

            {/* catch all with redirect to default page (home) */}
            <Route render={() => <Redirect to="/" />} />
          </Switch>

          {/* Add chat component here so it's accross the whole app */}
          <Chat
            open={this.state.chatOpen}
            onClose={() => this.setState({ chatOpen: false })}
          />
        </main>
      </StyleWrapper>
    );
  }
}

const mapStateToProps = ({ router, cart }) => ({
  currentPath: router.location.pathname,
  cart: cart.items
});

export default connect(
  mapStateToProps,
  null
)(App);
