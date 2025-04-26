const Options = ({ onLeaveFeedback, onResetFeedback, total }) => {
  return (
    <div style={{ margin: '20px 0' }}>
      <button onClick={() => onLeaveFeedback('good')}>Good</button>
      <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
      <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
      {total > 0 && <button onClick={onResetFeedback}>Reset</button>}
    </div>
  );
};

export default Options;
