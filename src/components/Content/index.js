import React from 'react';

const Content = ({ value }) => {
  return (
    <div id="content">
      <p>{value ? value : 'Pas de contenu choisi'}</p>
    </div>
  );
};


export default Content;
