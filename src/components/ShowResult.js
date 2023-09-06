import React, {useState} from 'react'

export  const ShowResult = ({score, question, handleClick}) => {


  return (
    <div className='container'>
      <h1>Result:</h1>
       <h1>Score: {score} / {question.length}</h1>
       <button className='btn' onClick={handleClick}>Restart Quiz</button>
    </div>
  )
}
