
import { connect } from 'react-redux';

import Form from 'src/components/Form';

import { inputChanged } from 'src/store/reducer';

const mapStateToProps = (state, ownProps) => ({
  input: state.input,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  inputChanged: (input) => {
    dispatch(inputChanged(input));
  },
});

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

export default FormContainer;
