/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { setAnswer } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch } from "@/redux/hooks";

import {
  nextQuestion,
  previousQuestion,
} from "@/redux/features/quiz/quizSlice";
import { useState } from "react";
import { IQuestion } from "@/types/quiz.type";

export function Result({userAnswer,question}:{userAnswer:string[],question: IQuestion[]}) {
  const dispatch = useAppDispatch();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = question[currentQuestionIndex];
  const currentAnswer = userAnswer[currentQuestionIndex];
  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    dispatch(nextQuestion());
  };
  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
    dispatch(previousQuestion());
  };
  const isAnswerQuiz = userAnswer[currentQuestionIndex] !== null;
  const correctAnswer = currentQuestion.correctAnswer === currentAnswer;

  //   const handleQuestionAnswerChange = (answer: string) => {
  //     dispatch(setAnswer({ questionIndex: currentQuestionIndex, answer }));
  //   };
  return (
    <div className="flex justify-center">
      <Card className="w-[456px]">
        <CardHeader>
          <CardTitle>{currentQuestion.question}</CardTitle>
          <CardDescription>
            Question:{currentQuestionIndex + 1} of {question.length}{" "}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {currentQuestion?.options.map((option:string, index:any) => (
            <Button
              //   onClick={() => handleQuestionAnswerChange(option)}
              key={index}
              size={"lg"}
              className={`w-full mt-5  ${
                currentQuestion.correctAnswer === option && "bg-green-500"
              }`}
              // className="w-full mt-5"
              variant={option === currentAnswer ? "default" : "outline"}
            >
              {option}
            </Button>
          ))}
          <div className="flex flex-col mt-5">
            <p>
              Ans:
              {correctAnswer ? (
                <span className="text-green-500 font-bold">Correct</span>
              ) : (
                <span className="text-red-500 font-bold">Wrong</span>
              )}
            </p>
            {!correctAnswer && (
              <p>
                Correct Ans:{" "}
                <span className="text-green-500 font-bold">
                  {currentQuestion.correctAnswer}
                </span>{" "}
              </p>
            )}
          </div>
        </CardContent>
        {/* <CardFooter className="w-full"> */}
        <div className="flex justify-between p-6">
          <Button
            disabled={currentQuestionIndex === 0}
            onClick={handlePreviousQuestion}
          >
            {" "}
            Previous
          </Button>
          {currentQuestionIndex < question.length - 1 && (
            <Button disabled={!isAnswerQuiz} onClick={handleNextQuestion}>
              {" "}
              Next
            </Button>
          )}
        </div>
        {/* </CardFooter> */}
      </Card>
    </div>
  );
}
