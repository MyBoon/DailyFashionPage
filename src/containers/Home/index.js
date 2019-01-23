import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Grid, Cell, Button } from 'react-foundation';
import StyleWrapper from './style';

import productsActions from '../../redux/products/actions';
import cartActions from '../../redux/cart/actions';

import { ProductGalery } from '../../components/ProductGalery';
import { OptionSelector } from '../../components/OptionSelector';

class Home extends React.Component {
  state = {
    selectedSize: null,
    selectedMaterial: null
  };

  componentDidMount() {
    // run product "fake" API query
    this.props.getDailyFreshLook();
  }

  addToCart() {
    const dailyProduct = this.props.products.length
      ? this.props.products[0]
      : null;

    // make sure we have a product
    // and then add it to the cart reducer with addToCart action
    if (dailyProduct) {
      this.props.addToCart(
        dailyProduct,
        this.state.selectedMaterial,
        this.state.selectedSize
      );

      // redirect to cart page
      this.props.history.push('/cart');
    }
  }

  render() {
    const dailyProduct = this.props.products.length
      ? this.props.products[0]
      : null;

    return (
      <StyleWrapper>
        {dailyProduct ? (
          <Grid className="display">
            <Cell small={12} large={6}>
              <ProductGalery images={dailyProduct.images} />
            </Cell>
            <Cell small={8} large={4} offsetOnLarge={1} className="description">
              {/* Display general info for the product (title, desctiption, price...) */}
              <h1>{dailyProduct.name}</h1>
              <p>{dailyProduct.description}</p>
              <ul>
                {dailyProduct.bullets.map((bullet, key) => {
                  return <li key={key}>{bullet}</li>;
                })}
              </ul>
              <h2>${dailyProduct.price / 100}</h2>

              {/* Option selector for Material */}
              <OptionSelector
                optionLabel={'Material'}
                options={dailyProduct.materials}
                onChange={material => {
                  this.setState({ selectedMaterial: material });
                }}
                info={dailyProduct.materialInfo}
              />

              {/* Option selector for Size */}
              <OptionSelector
                optionLabel={'Size'}
                options={dailyProduct.sizes.map(size => {
                  return size.abbreviation;
                })}
                onChange={size => {
                  this.setState({ selectedSize: size });
                }}
                info={dailyProduct.sizeInfo}
              />

              {/* Add to cart button */}
              <Button
                className="add-to-cart"
                onClick={this.addToCart.bind(this)}
              >
                Add to Cart
              </Button>
            </Cell>
            <Cell small={12} large={1} />
          </Grid>
        ) : (
          <div />
        )}
      </StyleWrapper>
    );
  }
}

const mapStateToProps = ({ products }) => ({
  products: products.list,
  productsError: products.err
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getDailyFreshLook: productsActions.getDailyFreshLook,
      addToCart: cartActions.addToCart
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
