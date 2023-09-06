
import { useState } from 'react';
import './QList.css'

export const Questions = ({ question: { question, choices }, onAnswerClick }) => {
  const [answer, setAnswer] = useState()
  const handleChange = (e) => {
    setAnswer(e.target.value)
    e.target.value = ''
  }



  return (
    <div className='container'>

      <h1 className='container1'>{ question }</h1>
      <div className=''>

        { choices.map((item, index) => {
          const { choiceText, isCorrect } = item
          return <div className='wrapper' key={ index }>
            <label htmlFor="">
              <input type="radio" name="question" id="" onChange={ handleChange } value={ isCorrect } /> { choiceText }
            </label>
          </div>
        }) }
      </div>

      { <button className='btn' onClick={ () => onAnswerClick(answer) }>Next</button>  }



    </div>
  )

}
