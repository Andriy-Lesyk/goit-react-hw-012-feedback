import React from 'react';
import PropTypes from 'prop-types';
import { Title, StatItem, Stat, Notification } from './Statistics.styles';

function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  message,
}) {
  return (
    <div>
      <Title>Statistics</Title>
      {good !== 0 || bad !== 0 || neutral !== 0 ? (
        <Stat>
          <StatItem>Good: {good}</StatItem>
          <StatItem>Neutral {neutral}:</StatItem>
          <StatItem>Bad: {bad}</StatItem>
          <StatItem>Total: {total}</StatItem>
          <StatItem>Positive feedback: {positivePercentage}%</StatItem>
        </Stat>
      ) : (
        <Notification>{message}</Notification>
      )}
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
};

export default Statistics;
