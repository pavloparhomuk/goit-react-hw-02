import css from "./Options.module.css";

const Options = ({ onFeedback, totalFeedback }) => (
  <div className={css.options}>
    <button onClick={() => onFeedback("good")}>Good</button>
    <button onClick={() => onFeedback("neutral")}>Neutral</button>
    <button onClick={() => onFeedback("bad")}>Bad</button>
    {totalFeedback > 0 && (
      <button onClick={() => onFeedback("reset")}>Reset</button>
    )}
  </div>
);

export default Options;
