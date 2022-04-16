import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = event => {
    const feedback = event.currentTarget.name;
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  handleIncrementTotal = () =>
    (this.total = this.state.good + this.state.bad + this.state.neutral);

  handleIncrementPositive = () =>
    (this.positive = Math.round((this.state.good / this.total) * 100));

  render() {
    const { bad, good, neutral } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            handleFeedback={this.handleIncrement}
            options={this.state}
          />
          {good !== 0 || bad !== 0 || neutral !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.handleIncrementTotal()}
              positivePercentage={this.handleIncrementPositive()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
