import css from "./Options.module.css";

const Options = ({ onFeedback }) => (
  <div className={css.options}>
    <button onClick={() => onFeedback("good")}>Good</button>
    <button onClick={() => onFeedback("neutral")}>Neutral</button>
    <button onClick={() => onFeedback("bad")}>Bad</button>
    <button onClick={() => onFeedback("reset")}>Reset</button>
  </div>
);

export default Options;
