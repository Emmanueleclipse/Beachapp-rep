import React, { useState } from 'react';  

import SelectQuestion from "./Components/selectQuestion"
import CheckCompleted from "./Components/checkCompleted"
import Home from "./Components/home"


function App() {
  let questionsall = [
    {
      id: 1,
      question: "Do you have a fever or cough?",
      isAnswer: 'yes',
    },
    {
      id: 2,
      question: "Do you have a shortness of breath  or difficulty breathing?",
      isAnswer: 'no',
    },
  ]
  let [questions] = useState(questionsall);
  let [counter, setCounter] = useState(0);
  let [answer, setAnswer] = useState([]);
  let [isStart, setIsStart] = useState(false);
  let [isComplete, SetIsComplete] = useState(false)
 


  const handleReset = () =>{
      setIsStart(false)
      setAnswer([])
      setCounter(0)
      SetIsComplete(false)
  }


  const questionBegain = () => {
    setIsStart(true)
    setCounter(counter + 1)
  }

  const handleRadio = (val, id) => {  
      let obj = {
          id: id,
          answer: val
      }
      setAnswer([...answer, obj])
      setCounter(counter + 1)
      if(counter < questions.length+1){
        SetIsComplete(true)
      }
  }


  const handleComplete = () => {
    let map = questions.map((val, i) => answer[i].id == val.id && answer[i].answer == val.isAnswer  ? 'match' : '' ).filter(el =>el )  
  
    console.log(map)
  }


  return (
    <div className="App mx-5 py-5 container mx-auto md:w-4/12">
      <header className="container mx-auto"> 
        {  isStart && !isComplete && <button className="text-blue-400" onClick={handleReset}>Cancel</button>}
      </header>
      <main className="px-5">
        { !isStart  && !isComplete &&  <Home/> }
        { isStart && questions.map(question => question.id === counter ? <SelectQuestion radio={handleRadio} id={question.id} key={question.id} name={question.question} /> : '')}
        { isComplete &&  <CheckCompleted /> }
      </main>
      <footer className="w-full px-5">
        <div className="flex justify-center">
          {!isStart && <button className="w-full rounded-full text-white bg-blue-400 py-2 px-5 " onClick={ questionBegain }>Begain</button>}
          {isComplete &&  <button className="w-full rounded-full text-white bg-blue-400 py-2 px-5 " onClick={handleComplete}>Done</button>}
        </div>
        {isStart && !isComplete &&  <p className="text-base text-gray-500 px-10">Question {counter} of {questions.length}</p> }

        <div className="flex justify-center md:pt-16">
          <p className="p-1 w-24 bg-black mt-10 text-center"></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
