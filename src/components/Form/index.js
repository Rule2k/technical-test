import React from 'react';

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
      <input type="text" value={input} onChange={inputHasChanged} />
    </form>
  );
};

export default Form;
