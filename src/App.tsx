import { useState } from "react"

interface AnswerOption {
  answertext: string
  isCorrect: boolean
}
interface Question {
  questionText: string,
  answerOptions: AnswerOption[]
}


const questions: Question[] = [
  {
    questionText: 'what is the capital of france?',
    answerOptions: [
      { answertext: 'New York', isCorrect: false },
      { answertext: 'London', isCorrect: false },
      { answertext: 'Paris', isCorrect: true },
      { answertext: 'Dublin', isCorrect: false },
    ],
  },
  {
    questionText: 'who is CEO of Tesla?',
    answerOptions: [
      { answertext: 'New York', isCorrect: false },
      { answertext: 'London', isCorrect: false },
      { answertext: 'Paris', isCorrect: true },
      { answertext: 'Dublin', isCorrect: false },
    ],
  },
  {
    questionText: 'what is the capital of france?',
    answerOptions: [
      { answertext: 'jeff bressos', isCorrect: false },
      { answertext: 'Elon Musk', isCorrect: false },
      { answertext: 'Bill', isCorrect: true },
      { answertext: 'Tony Tark', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the capital of Germany?',
    answerOptions: [
      { answertext: 'Berlin', isCorrect: true },
      { answertext: 'Munich', isCorrect: false },
      { answertext: 'Frankfurt', isCorrect: false },
      { answertext: 'Hamburg', isCorrect: false },
    ],
  },
  {
    questionText: 'Which planet is known as the Red Planet?',
    answerOptions: [
      { answertext: 'Earth', isCorrect: false },
      { answertext: 'Mars', isCorrect: true },
      { answertext: 'Jupiter', isCorrect: false },
      { answertext: 'Venus', isCorrect: false },
    ],
  },
  {
    questionText: 'Who founded Microsoft?',
    answerOptions: [
      { answertext: 'Steve Jobs', isCorrect: false },
      { answertext: 'Elon Musk', isCorrect: false },
      { answertext: 'Bill Gates', isCorrect: true },
      { answertext: 'Mark Zuckerberg', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the largest ocean on Earth?',
    answerOptions: [
      { answertext: 'Atlantic Ocean', isCorrect: false },
      { answertext: 'Indian Ocean', isCorrect: false },
      { answertext: 'Pacific Ocean', isCorrect: true },
      { answertext: 'Arctic Ocean', isCorrect: false },
    ],
  },


]

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const [answered, setAnswered] = useState<boolean>(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState<number>(0)
  const [showScore, setShowScore] = useState<boolean>(false)

  const handleAnswerOption = (index: number, isCorrect: boolean) => {
    setAnswered(true)
    setSelectedAnswer(index)
    if (isCorrect) {
      setScore(score + 1)
    }
  }

  const NextQuestion = () => {
    setAnswered(false)
    // selectedAnswer(null)
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }

  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-lg bg-white p-5 rounded-2xl shadow-lg">
        <div className="p-2 border text-center font-bold mb-2 text-2xl cursor-pointer">Quiz App</div>
        {showScore ? <div>
          you score {score} of {questions.length}
        </div>
          :

          <div>
            <div>{questions[currentQuestion].questionText}</div>
            <div>{questions[currentQuestion].answerOptions.map((option, index) => (
              <button
                className={`block w-full p-2 mt-2 rounded border cursor-pointer ${answered ?
                  option.isCorrect ?
                    "bg-green-200"
                    : selectedAnswer === index ?
                      "bg-red-200" : ""
                  : ""
                  }`}
                onClick={() => handleAnswerOption(index, option.isCorrect)}>
                {option.answertext}
              </button>
            ))}
            </div>
            <button className={`block w-full ${answered ? "bg-green-500" : "bg-green-300"}  text-white p-2 rounded cursor-pointer`}
              onClick={NextQuestion} disabled={!answered}>Next Question</button>
            <p className="text-center text-gray-400 text-sm ">Question {currentQuestion + 1} of {questions.length}</p>
          </div>
        }
      </div>
    </div>
  )
}

export default App