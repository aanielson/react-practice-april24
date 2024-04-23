import AdvancedJS from './advanced'
import ArrayProblemsJS from './arrayQuestions'
import BasicsJS from './basics'
import CommonJS from './common'
import TrickyJS from './tricky'

function PracticeDisplay() {
  return (
    <div className="main">
      <h1>Practice Results</h1>
      <div className="practice-results">
        {/* <AdvancedJS /> */}
        <ArrayProblemsJS />
        {/* <BasicsJS /> */}
        {/* <CommonJS /> */}
        {/* <TrickyJS /> */}
      </div>
    </div>
  )
}

export default PracticeDisplay
