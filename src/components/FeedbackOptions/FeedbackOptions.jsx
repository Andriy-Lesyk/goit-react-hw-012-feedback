import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './FeedbackOptions.styled';

function FeedbackOptions({ handleFeedback, options }) {
  return (
    <div>
      {Object.keys(options).map(option => (
        <Btn key={option} name={option} onClick={handleFeedback}>
          {option}
        </Btn>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  handleFeedback: PropTypes.func.isRequired,
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

export default FeedbackOptions;
