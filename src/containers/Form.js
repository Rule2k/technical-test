
import { connect } from 'react-redux';

import Form from 'src/components/Form';

import { inputChanged, formSent } from 'src/store/reducer';

const mapStateToProps = (state, ownProps) => ({
  input: state.input,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  inputChanged: (input) => {
    dispatch(inputChanged(input));
  },
  formSent: () => {
    dispatch(formSent());
  },
});

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

export default FormContainer;
