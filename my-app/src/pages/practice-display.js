import React from 'react'
import AdvancedJS from './practiceDisplay/advanced'
import ArrayProblemsJS from './practiceDisplay/arrayQuestions'
import BasicsJS from './practiceDisplay/basics'
import CommonJS from './practiceDisplay/common'
import TrickyJS from './practiceDisplay/tricky'

const PracticeDisplay = () => {
  return (
    <div className="main">
      <h1>Practice Results</h1>
      <div className="practice-results">
        <AdvancedJS />
        <ArrayProblemsJS />
        <BasicsJS />
        <CommonJS />
        <TrickyJS />
      </div>
    </div>
  )
}

export default PracticeDisplay
