import React from 'react';

const Form = ({ inputChanged, input }) => {
  const inputHasChanged = event => (
    inputChanged(event.target.value)
  );
  return (
    <form action="submit" id="form">
      <input type="text" value={input} onChange={inputHasChanged} />
    </form>
  );
};

export default Form;
