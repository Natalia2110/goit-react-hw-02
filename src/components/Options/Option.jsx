function Options({ total, updateFeedback, resetFeedback }) {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          updateFeedback("good");
        }}
      >
        good
      </button>
      <button
        type="button"
        onClick={() => {
          updateFeedback("neutral");
        }}
      >
        neutral
      </button>
      <button
        type="button"
        onClick={() => {
          updateFeedback("bad");
        }}
      >
        bad
      </button>
      {total !== 0 && (
        <button
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
