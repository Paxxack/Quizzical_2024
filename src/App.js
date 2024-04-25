import SelectionPage from './Components/SelectionPage';
import Question from './Components/Question';
import Results from './Components/Results';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [gameStage, setGameStage] = useState(1);
  const [apiData, setApiData] = useState([]);

  function startQuiz(e, formData) {
    e.preventDefault();

    const { cateQ, nbrQ, diffQ } = formData;

    fetch(`https://opentdb.com/api.php?${nbrQ}&${cateQ}&${diffQ}`)
      .then((res) => res.json())
      .then((data) =>
        setApiData(
          data.results.map((data) => {
            const mixedArr = [data.correct_answer, ...data.incorrect_answers];
            const ShuffledArr = shuffleMyArray(mixedArr);

            function shuffleMyArray(array) {
              for (let i = array.length - 1; i >= 0; i--) {
                const j = Math.floor(Math.random() * array.length);
                [array[i], array[j]] = [array[j], array[i]];
              }
              return array;
            }

            const answersWithId = ShuffledArr.map((each) => {
              return { answer: each, id: uuidv4(), isSelected: false };
            });

            return {
              id: uuidv4(),
              correct_answer: data.correct_answer,
              category: data.category,
              question: data.question,
              answerArr: answersWithId,
            };
          }),
        ),
      );

    setGameStage(2);
  }

  function handleSelection(id, questionId) {
    setApiData((prevData) => {
      return prevData.map((data) => {
        if (data.id === questionId) {
          const answerArr = data.answerArr.map((answer) => {
            if (answer.id === id) {
              return {
                ...answer,
                isSelected: !answer.isSelected,
              };
            } else {
              return {
                ...answer,
                isSelected: false,
              };
            }
          });
          return {
            ...data,
            answerArr,
          };
        }
        return data;
      });
    });
  }

  function checkAnswers() {
    setGameStage(3);
  }

  function restartGame() {
    setGameStage(1);
  }

  function scoreSummary() {
    let score = 0;
    apiData.map((data) => {
      if (
        data.answerArr.find((element) => element.isSelected).answer ===
        data.correct_answer
      ) {
        score++;
      }
    });
    return score;
  }

  const quizz = apiData.map((eachQuestion, index) => {
    const { answerArr, question, id } = eachQuestion;
    return (
      <Question
        key={index}
        id={id}
        answerArr={answerArr}
        question={question}
        handleSelection={handleSelection}
      />
    );
  });

  const results = apiData.map((eachQuestion, index) => {
    const { answerArr, question, correct_answer } = eachQuestion;
    return (
      <Results
        key={index}
        question={question}
        answerArr={answerArr}
        correct_answer={correct_answer}
      />
    );
  });

  return (
    <div className="App">
      <div className="background">
        <div className="container">
          <div className="game-container">
            {gameStage === 1 && <SelectionPage startQuiz={startQuiz} />}
            {gameStage === 2 && quizz}
            {gameStage === 3 && results}
          </div>
          {gameStage === 2 && (
            <button className="check-answers" onClick={checkAnswers}>
              Check answers
            </button>
          )}
          {gameStage === 3 && (
            <button className="play-again" onClick={restartGame}>
              Play again {scoreSummary()}/{apiData.length}
            </button>
          )}
        </div>
        <img
          className="bottom-left-img"
          src="./blobbot.png"
          alt="background-images"
        />
        <img
          className="top-right-img"
          src="./blobtop.png"
          alt="background-images"
        />
      </div>
    </div>
  );
}

export default App;
