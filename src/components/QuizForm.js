import React, { useState } from 'react'

import { Questions } from './QuestionList'
import { ShowResult } from './ShowResult'
import { quiz } from '../Data/QuizData'
const QuizForm = () => {
  const [questions, setQuestions] = useState(quiz)
  const [showResult, setShowResult] = useState(false)
  const [questionCurrentIndex, setQuestionCurrentIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [score, setScore] = useState(0)

  const restartQuiz = () => {
    setScore(0)
    setQuestionCurrentIndex(0)
    setShowResult(false)

  }

  const onAnswerClick = (answer) => {

    if (answer === undefined) {
      setShowModal(true)
    }
    else {
      if (answer === 'true') {
        setScore(score + 1)
        setShowModal(false)
      }
      const nextIndex = questionCurrentIndex + 1
      if (nextIndex < questions.length) {
        setQuestionCurrentIndex(nextIndex)
      } else {
        setShowResult(true)
      }

    }


  }


  return (
    <div style={ customCss }>
      { showResult
        ?
        <ShowResult score={ score } question={ questions } handleClick={ restartQuiz } />
        :
        <Questions question={ questions[questionCurrentIndex] } onAnswerClick={ onAnswerClick } />
      }
      { showModal && <h1 className='wrapper'>Please Select One!</h1> }

    </div>
  )
}


const customCss =
{
  height: '100vh',
  display: 'grid',

  placeItems: 'center'
}


export default QuizForm