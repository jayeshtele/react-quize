import React from "react";

export default function FinishScreen({
  points,
  maxPossiblepoints,
  highscore,
  dispatch,
}) {
  const percentage = (points / maxPossiblepoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🎗️";
  if (percentage >= 80 && percentage < 100) emoji = "💐";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "😕";
  if (percentage === 0) emoji = "🤦";
  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You Scored <strong>{points}</strong> out of {maxPossiblepoints}(
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}
