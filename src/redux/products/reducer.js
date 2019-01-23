import actions from './actions';

const initState = {
  list: [],
  err: null
};

export default function productsReducer(state = { ...initState }, action) {
  switch (action.type) {
    case actions.GET_PRODUCT_SUCCESS: {
      const pos = state.list.findIndex(item => {
        return item.id === action.product.id;
      });
      if (pos === -1) {
        return {
          ...state,
          list: state.list.concat([action.product])
        };
      } else {
        return {
          ...state,
          list: [
            ...state.list.slice(0, pos),
            action.product,
            ...state.list.slice(pos + 1)
          ]
        };
      }
    }

    case actions.GET_PRODUCT_FAIL: {
      return {
        ...state,
        err: action.err
      };
    }

    default:
      return state;
  }
}
