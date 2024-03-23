import SelectionPage from "./Components/SelectionPage";
import React, {useState} from "react"

function App() {
  const [gameStage, setGameStage] = useState(1)

  function startQuiz(e, formData){
    e.preventDefault()
    setGameStage(2)
    console.log(formData)
    console.log(gameStage)
  }

  return (
    <div className="App">
      <div className="container">
        <img className="bottom-left-img" src="./blobbot.png" alt="background-images"></img>
        <img className="top-right-img" src="./blobtop.png" alt="background-images"></img>
        {gameStage === 1 && <SelectionPage startQuiz={startQuiz}/>}
      </div>
    </div>
  );
}

export default App;
