import React from 'react';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <div>
      <h1>
        {title}
        {children}
      </h1>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
