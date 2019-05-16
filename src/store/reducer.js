const initialState = {
  input: '',
  displayForm: 'Message par défaut du header',
};

const INPUT_HAS_CHANGED = 'INPUT_HAS_CHANGED';
const FORM_HAS_BEEN_SENT = 'FORM_HAS_BEEN_SENT';

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INPUT_HAS_CHANGED:
      return {
        ...state,
        input: action.input,
      };
    case FORM_HAS_BEEN_SENT:
      return {
        ...state,
        displayForm: state.input,
        input: '',
      };
    default:
      return state;
  }
};

export const inputChanged = input => ({
  type: INPUT_HAS_CHANGED,
  input,
});

export const formSent = () => ({
  type: FORM_HAS_BEEN_SENT,
});

export default reducer;
