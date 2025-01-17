import { useParams } from "react-router"
import { Link } from "react-router"
const Survey = () => {
  const {questionNumber} = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestion = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestion = questionNumberInt + 1
    return (
      <div>
        <h1>Questionnaire</h1>
        <h2>question {questionNumber}</h2>
        <Link to={`/Survey/${prevQuestion}`}>precedent</Link>
        {
          nextQuestion === 10? (
            <Link to="/results">Resultat</Link>
          ) :(
            <Link to={`/Survey/${nextQuestion}`}>suivant</Link>
          )
        }
      </div>
    )
  }
  
  export default Survey