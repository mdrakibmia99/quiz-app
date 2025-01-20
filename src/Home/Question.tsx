/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { setAnswer } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import QuizControl from "./QuizControl";
import { useState } from "react";
import { useGetAllQuizQuery } from "@/redux/features/quiz/quizApi";
import Loading from "@/components/share/Loading";
import { useParams } from "react-router-dom";
import { IQuizResponse } from "@/types/quiz.type";

export function Question() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { data, isLoading } = useGetAllQuizQuery(undefined);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { userAnswer } = useAppSelector((state) => state.quiz);
  // Ensure the question array and current question exist
  // if (!question || question.length === 0) {
  //   return <div>No questions available.</div>;
  // }
  let filterCurrentQuiz, currentQuestion, currentAnswer: string, question;
  if (!isLoading) {
    filterCurrentQuiz = data?.data.find(
      (quiz: IQuizResponse) => quiz._id === id
    );
    question = filterCurrentQuiz?.questions;
    currentQuestion = question[currentQuestionIndex];
    currentAnswer = userAnswer[currentQuestionIndex] || "";
  }
  const handleQuestionAnswerChange = (answer: string) => {
    dispatch(setAnswer({ questionIndex: currentQuestionIndex, answer }));
  };
  if (isLoading) {
    return <Loading />;
  }

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
          {currentQuestion?.options.map((option: any, index: any) => (
            <Button
              onClick={() => handleQuestionAnswerChange(option)}
              key={index}
              size={"lg"}
              className="w-full mt-5"
              variant={option === currentAnswer ? "default" : "outline"}
            >
              {option}
            </Button>
          ))}
        </CardContent>
        {/* <CardFooter className="w-full"> */}
        <QuizControl
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          currentQuestionIndex={currentQuestionIndex}
        />
        {/* </CardFooter> */}
      </Card>
    </div>
  );
}
