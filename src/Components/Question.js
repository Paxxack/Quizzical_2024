import React from 'react';
import { decode } from 'html-entities';

export default function Question({
  question,
  handleSelection,
  answerArr,
  id,
  numQuestion,
}) {
  const answer = answerArr.map((ans, index) => {
    let style = ans.isSelected ? 'selected' : 'unSelected';

    return (
      <div key={index + 100}>
        <button
          className={`${style} ans-pills-properties`}
          onClick={() => handleSelection(ans.id, id)}
        >
          {decode(ans.answer)}
        </button>
      </div>
    );
  });

  return (
    <div>
      <h2 className="question">{`${numQuestion} - ${decode(question)}`}</h2>
      <div className="all-answers">{answer}</div>
      <hr />
    </div>
  );
}
