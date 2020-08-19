import React, { Children } from 'react';
import './styles.css';

function DefaultPage({ id, children }) {
  return (
    <div id={id} className="default-page-wrapper">
      {children}
    </div>
  );
}

export default DefaultPage;
