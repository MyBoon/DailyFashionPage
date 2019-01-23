import actions from './actions';

const initState = {
  items: [],
  err: null
};

export default function cartReducer(state = { ...initState }, action) {
  switch (action.type) {
    case actions.ADD_TO_CART_SUCCESS: {
      // this reducer generates one unique field per size
      // example:
      //
      // items: {
      //   S: [{}, {}, {}, ...],
      //   M: [{}, {}, {}, ...],
      //   L: [{}, {}, {}, ...],
      //   XL: [{}, {}, {}, ...]
      //   ...
      // }
      //
      // This allows to group items per size on the state level
      // and makes it easier to consume the data on the UI level

      return {
        ...state,
        items: {
          ...state.items,
          [action.size]: state.items[action.size]
            ? state.items[action.size].concat([action.item])
            : [action.item]
        }
      };
    }

    default:
      return state;
  }
}
