const initialState = {
  input: '',
};

const INPUT_HAS_CHANGED = 'INPUT_HAS_CHANGED';

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INPUT_HAS_CHANGED:
      return {
        ...state,
        input: action.input,
      };
    default:
      return state;
  }
};

export const inputChanged = input => ({
  type: INPUT_HAS_CHANGED,
  input,
});

export default reducer;
