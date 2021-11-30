import React from "react";
//styles
import {Wrapper, ButtonWrapper} from './QuestionCard.styles'
//types
import { AnswerObject } from '../App'

type Props = {
    question: string;
    answers: string[];
    callBack: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;

}

const QuestionCard: React.FC<Props> = ({ question, answers, callBack, userAnswer, questionNr, totalQuestions}) => (
(
<Wrapper>
    <p className="number"> Question: {questionNr}/ {totalQuestions}</p>
    <p dangerouslySetInnerHTML={{__html: question}} />
    <div>
        {answers.map((answer) => (
            <ButtonWrapper  key={answer} correct={userAnswer?.correctAnswer === answer} userClicked={userAnswer?.answer === answer}>
                <button disabled={userAnswer ? true : false} value={answer} onClick={callBack}>
                    <span dangerouslySetInnerHTML={{ __html: answer}} />
                </button>
            </ButtonWrapper>
        ))}
    </div>
</Wrapper>)
);

export default QuestionCard