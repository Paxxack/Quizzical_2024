import SelectionPage from "./Components/SelectionPage";
import Question from "./Components/Question";
import React, {useState} from "react"

function App() {
  const [gameStage, setGameStage] = useState(1)
  const [apiData, setApiData] = useState([])

  function startQuiz(e, formData){
    e.preventDefault()
    const {cateQ, nbrQ, diffQ} = formData
    fetch(`https://opentdb.com/api.php?${nbrQ}&${cateQ}&${diffQ}`)
      .then(res => res.json())
      .then(data => setApiData(data.results))
    setGameStage(2)
  }

  const quizz = apiData.map((question , index) => {
    return <Question 
            correct_answer={question.correct_answer}
            incorrect_answers={question.incorrect_answers}
            question={question.question}
            key={index}
            />
  })


  return (
    <div className="App">
      <div className="container">
        <img className="bottom-left-img" src="./blobbot.png" alt="background-images"></img>
        <img className="top-right-img" src="./blobtop.png" alt="background-images"></img>
        {gameStage === 1 && <SelectionPage startQuiz={startQuiz}/>}
        {gameStage === 2 && quizz}
      </div>
    </div>
  );
}

export default App;
