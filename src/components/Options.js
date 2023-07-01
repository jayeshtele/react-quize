import React from "react";

export default function Options({ question, answer, dispatch }) {
  return (
    <div className="option">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${}`}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
