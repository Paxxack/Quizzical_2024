import React, {useState} from "react"

export default function SelectionPage({startQuiz}){

    const [formData, setFormData] = useState({cateQ:"", nbrQ:0, diffQ:""})

    function handleChange(e){
        const {value, name} = e.target
        setFormData((prevFormData => {
            return { ...prevFormData,
            [name]: value
            }
        }))
    }

    return <div className="first-page">
                <h1>Quizzical</h1>
                <h3>Select the subject of your questions.</h3>
                <form className="select-form" onSubmit={(e)=> startQuiz(e, formData)}>
                <select name="nbrQ" onChange={handleChange} required>
                    <option value="">Choose the number of questions</option>
                    <option value="amount=5">5</option>
                    <option value="amount=10">10</option>
                    <option value="amount=15">15</option>
                </select>
                <select name="cateQ" onChange={handleChange} required>
                    <option value="">Choose your category</option>
                    <option value="category=9">General Knowledge</option>
                    <option value="category=10">Entertainment: Books</option>
                    <option value="category=11">Entertainment: Film</option>
                    <option value="category=12">Entertainment: Music</option>
                    <option value="category=13">Entertainment: Muscicals & Theatres</option>
                    <option value="category=14">Entertainment: Television</option>
                    <option value="category=15">Entertainment: Video Games</option>
                    <option value="category=16">Entertainment: Board Games</option>
                    <option value="category=17">Science & Nature</option>
                    <option value="category=18">Science: Computers</option>
                    <option value="category=19">Science Mathematics</option>
                </select >
                <select name="diffQ" onChange={handleChange} required>
                    <option value="">Choose your difficulty</option>
                    <option value="difficulty=easy">Easy</option>
                    <option value="difficulty=medium">Medium</option>
                    <option value="difficulty=hard">Hard</option>
                </select>
                <button className="startquiz-btn">Start Quiz</button>
                </form>
            </div>
}