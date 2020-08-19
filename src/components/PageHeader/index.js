import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function PageHeader({ image, headerItems }) {
  return (
    <div className="header-wrapper">
      {image}
      <div className="header-text">
        {headerItems}
      </div>
    </div>
  );
}

PageHeader.propTypes = {
  image: PropTypes.element,
  headerItems: PropTypes.element,
};

PageHeader.defaultProps = {
  image: null,
  headerItems: null,
};

export default PageHeader;
