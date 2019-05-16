import React from 'react';
import './content.scss';

const Content = ({ value }) => (
  <div id="content">
    <p>{value ? value : 'Cliquez sur l\'un des liens à droite pour afficher un nouveau contenu.'}</p>
  </div>
);


export default Content;
