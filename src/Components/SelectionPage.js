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
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>
                <select name="cateQ" onChange={handleChange} required>
                    <option value="">Choose your category</option>
                    <option value="General Knowledge">General Knowledge</option>
                    <option value="Entertainment: Books">Entertainment: Books</option>
                    <option value="Entertainment: Film">Entertainment: Film</option>
                    <option value="Entertainment: Music">Entertainment: Music</option>
                    <option value="Entertainment: Muscicals & Theatres">Entertainment: Muscicals & Theatres</option>
                    <option value="Entertainment: Television">Entertainment: Television</option>
                    <option value="Entertainment: Video Games">Entertainment: Video Games</option>
                    <option value="Entertainment: Board Games">Entertainment: Board Games</option>
                    <option value="Science & Nature">Science & Nature</option>
                    <option value="Science: Computer">Science: Computers</option>
                    <option value="Science Mathematics">Science Mathematics</option>
                </select >
                <select name="diffQ" onChange={handleChange} required>
                    <option value="">Choose your difficulty</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
                <button className="startquiz-btn">Start Quiz</button>
                </form>
            </div>
}