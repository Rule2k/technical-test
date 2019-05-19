import React from 'react';
import PropTypes from 'prop-types';
import './content.scss';

const Content = ({ value }) => (
  <div id="content">
    <p>{value || 'Cliquez sur l\'un des liens à droite pour afficher un nouveau contenu.'}</p>
  </div>
);

Content.propTypes = {
  value: PropTypes.string,
};

Content.defaultProps = {
  value: undefined,
};

export default Content;
