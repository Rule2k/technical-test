
import { connect } from 'react-redux';

import Form from 'src/components/Form';

import { inputChanged, formSent } from 'src/store/reducer';

const mapStateToProps = state => ({
  input: state.input,
});

const mapDispatchToProps = dispatch => ({
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
