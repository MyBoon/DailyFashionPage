const cartActions = {
  ADD_TO_CART_SUCCESS: 'ADD_TO_CART_SUCCESS',

  addToCart: (item, material, size) => {
    return dispatch => {
      dispatch({
        type: cartActions.ADD_TO_CART_SUCCESS,
        item: item,
        material: material,
        size: size
      });
    };
  }
};

export default cartActions;
