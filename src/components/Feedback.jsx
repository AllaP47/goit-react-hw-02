const Feedback = ({ good, neutral, bad, total, positive }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positive}%</p>
    </div>
  );
};

export default Feedback;
