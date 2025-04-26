const Feedback = ({ good, neutral, bad, total, positive }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Statistics</h2>
      <p className="text">Good: {good}</p>
      <p className="text">Neutral: {neutral}</p>
      <p className="text">Bad: {bad}</p>
      <p className="text">Total: {total}</p>
      <p className="text">Positive feedback: {positive}%</p>
    </div>
  );
};

export default Feedback;
