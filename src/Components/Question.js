import React from "react"

export default function Question({correct_answer, incorrect_answers, question}){
    let unshuffledArr = [correct_answer,...incorrect_answers]
    console.log("Unshuffled:", unshuffledArr)

    

    function shuffleMyArray(array){
        
        for(let i = 0; i < array.length - 1; i++){
            console.log(i)
            const j = Math.ceil(Math.random() * (i + 1))
            console.log(j)
            [array[i], array[j]] = [array[j], array[i]]
        }
        return array
    }

    console.log("Shuffled:", shuffleMyArray(unshuffledArr))
    
    return <div>
            <h1>Questions</h1>
        </div>
}