import css from "./Option.module.css";
function Options({ total, updateFeedback, resetFeedback }) {
  return (
    <div className={css["options-box"]}>
      <button
        className={css.btn}
        type="button"
        onClick={() => {
          updateFeedback("good");
        }}
      >
        good
      </button>
      <button
        className={css.btn}
        type="button"
        onClick={() => {
          updateFeedback("neutral");
        }}
      >
        neutral
      </button>
      <button
        className={css.btn}
        type="button"
        onClick={() => {
          updateFeedback("bad");
        }}
      >
        bad
      </button>
      {total !== 0 && (
        <button
          className={css.btn}
          type="button"
          onClick={resetFeedback}
          //   onClick={() =>
          //     resetFeedback({
          //       good: 0,
          //       neutral: 0,
          //       bad: 0,
          //     })
          //   }
        >
          reset
        </button>
      )}
    </div>
  );
}

export default Options;
