import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
//components
import QuestionCard from './components/QuestionCard';
//types
import { Difficulty, QuestionState } from './API';
//styles
import { Global } from './App.styles'

export type AnswerObject= {
  question: string,
  answer: string,
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  // console.log(questions)


  const startTrivia = async () => {
    //When we click the start button, we trigger the API fetch
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    )

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver){
      //users answer
      const answer = e.currentTarget.value;
      //Check answer against correct value
      const correct = questions[number].correct_answer === answer;
      //Add score if answer is correct
      if( correct ) setScore((prev) => prev + 1);
      //Save answer in the array for user answers
      const answerObject = {
      question: questions[number].question,
      answer,
      correct,
      correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    //move to the next question if we not in the last question
    const nextQuestion = number + 1;

    if(nextQuestion === TOTAL_QUESTIONS){
      setGameOver(true)
    } else {
      setNumber(nextQuestion);
    }


  }
  return (
    <>
    <Global />
    <div className="App">
      <h1>React Quiz</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className='start' onClick={startTrivia}>
      start
          </button>
        ) : null}

    {/* Only show score if we not already in a game */}
    {!gameOver ? <p className='score'>Score: {score}</p> : null }
    {/* Loading Questions only will be showed when we load something */}
    {loading ? <p>Loading Questions ...</p> : null}
    {/* Question Card will only be loaded if we not loading and if we not in GameOver */}
    {!loading && !gameOver && (
      <QuestionCard 
        questionNr={number + 1}
        totalQuestions ={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callBack={checkAnswer}  
      />
    )}
    {/* Only show next question when the user as put in an answer */}
    {!gameOver && !loading && userAnswers.length === number +1 && number !== TOTAL_QUESTIONS -1 ? (
      <button className='next' onClick={nextQuestion}>
            Next Question
      </button>
    ) : null }
  </div>
  </>
  ); 
}

export default App;
