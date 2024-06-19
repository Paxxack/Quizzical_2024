import { decode } from 'html-entities';

export default function Results({ answerArr, question, correct_answer }) {
  const answer = answerArr.map((ans, index) => {
    let styleResult = '';
    if (ans.answer === correct_answer && ans.isSelected) {
      styleResult = 'good-answer';
    } else if (ans.isSelected) {
      styleResult = 'bad-answer';
    } else {
      styleResult = 'neutral-answer';
    }

    return (
      <div key={index + 100}>
        <button className={`${styleResult} ans-pills-properties`}>
          {decode(ans.answer)}
        </button>
      </div>
    );
  });

  return (
    <div>
      <h2 className="question">{decode(question)}</h2>
      <div className="all-answers">{answer}</div>
      <hr />
    </div>
  );
}
