import { ProductAPI } from '../../services/ProductAPI';

const productsActions = {
  GET_PRODUCT_SUCCESS: 'GET_PRODUCT_SUCCESS',
  GET_PRODUCT_FAIL: 'GET_PRODUCT_FAIL',

  getDailyFreshLook: () => {
    return dispatch => {
      ProductAPI.getDailyFreshLook()
        .then(product => {
          if (product && product.id) {
            dispatch({
              type: productsActions.GET_PRODUCT_SUCCESS,
              product: product
            });
          }
        })
        .catch(err => {
          dispatch({
            type: productsActions.GET_PRODUCT_FAIL,
            err: err
          });
        });
    };
  }
};

export default productsActions;
