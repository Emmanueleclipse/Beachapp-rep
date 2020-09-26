import React, { useState, useEffect } from 'react';  

import SelectQuestion from "./Components/selectQuestion"
import CheckCompleted from "./Components/checkCompleted"
import CheckErrors from "./Components/checkErrors"
import Home from "./Components/home"


function App() {
  let questionsall = [
    {
      id: 1,
      question: "Do you have a fever or cough?",
      isAnswer: 'no',
    },
    {
      id: 2,
      question: "To the best of your knowledge have you been in close proximity, in the last 14 days, to any individual who tested positive for COVID-19?",
      isAnswer: 'no',
    },
  ]
  let [questions] = useState(questionsall);
  let [counter, setCounter] = useState(0);
  let [answer, setAnswer] = useState([]);
  let [isStart, setIsStart] = useState(false);
  let [isComplete, SetIsComplete] = useState(false)
  let [error, SetError] = useState(false)
 


  const handleReset = () =>{
      setIsStart(false)
      setAnswer([])
      setCounter(0)
      SetIsComplete(false)
      SetError(false)
  }


  const questionBegain = () => {
    setIsStart(true)
    setCounter(counter + 1)
  }

  const handleRadio =  (val, id) => {  
      let obj = {
          id: id,
          answer: val
      }
      setAnswer([...answer, obj])
      setCounter(counter + 1)
      if(questions.length < counter + 1){ 
        SetIsComplete(true)  
      }  

  }

  useEffect(() => {
    if(isComplete){
     let map = questions.map((val, i) => answer[i].id == val.id && answer[i].answer == val.isAnswer  ? 'match' : '' ).filter(el =>el )  
      if(map.length == questions.length){
        SetError(true)

      }else{
        SetError(false)
        
      } 
      console.log(answer)
    } 
  },[isComplete])

  const handleComplete = () => { 
    setIsStart(false)
      setAnswer([])
      setCounter(0)
      SetIsComplete(false)
      SetError(false)
  }


  return (
    <div   className={ `App py-2 h-screen md:flex items-center md:bg-gray-100 ${isComplete && !error ?  'bg-red-100' : '' } ${isComplete && error ?  'bg-green-100' : '' }`} >
     <div className={ `container mx-auto md:w-5/12  md:shadow-lg md:rounded-lg ${isComplete && !error ?  'bg-red-100' : '' } ${isComplete && error ?  'bg-green-100' : '' }`}> 
        <header className="container mx-auto px-5 md:hidden"> 
          {  isStart && !isComplete && <button className="text-blue-400" onClick={handleReset}>Cancel</button>}
        </header>
        <main className="px-12">
          { !isStart  && !isComplete &&  <Home/> }
          { isStart && questions.map(question => question.id === counter ? <SelectQuestion radio={handleRadio} id={question.id} key={question.id} name={question.question} /> : '')}
          { isComplete && !error && <CheckErrors /> }
          { isComplete &&  error && <CheckCompleted /> }
        </main>
        <footer className="w-full fixed md:relative bottom-0 left-0 md:pb-5">
          <div className="w-full  mx-auto px-5">
          <div className="flex justify-center md:justify-end">
            {!isStart && <button className="w-full md:w-56 rounded-full text-white text-lg btn-bg py-4 md:py-3 px-5 " onClick={ questionBegain }>Begin</button>}
          </div>
          <div className="flex justify-center ">
              {isComplete &&  <button className="w-full md:w-56 rounded-full text-white  text-lg btn-bg py-4 md:py-3 px-5 " onClick={handleComplete}>Done</button>}
          </div>
          {isStart && !isComplete &&  <p className="text-base text-gray-500 px-5 bg-gray-100 py-2 w-40 rounded-full md:ml-10">Question {counter} of {questions.length}</p> }

          <div className="flex justify-center md:hidden pb-5">
            <p className="p-1 w-40 bg-black mt-10 text-center rounded-full"></p>
          </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
