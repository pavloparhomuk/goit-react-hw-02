const Feedback = ({ feedback }) => {
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbackPercentage =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <div>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total Feedback: {totalFeedback}</p>
      <p>Positive Feedback: {positiveFeedbackPercentage}%</p>
    </div>
  );
};

export default Feedback;
