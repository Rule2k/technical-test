import React from 'react';
import PropTypes from 'prop-types';
import './form.scss';

const Form = ({ inputChanged, formSent, input }) => {
  const inputHasChanged = event => (
    inputChanged(event.target.value)
  );
  const formHasBeenSent = (event) => {
    event.preventDefault();
    formSent();
  };
  return (
    <form action="submit" id="form" onSubmit={formHasBeenSent}>
      <input type="text" value={input} onChange={inputHasChanged} placeholder="Tapez ici pour changer le message du header" />
    </form>
  );
};

Form.propTypes = {
  inputChanged: PropTypes.func.isRequired,
  formSent: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
};

export default Form;
