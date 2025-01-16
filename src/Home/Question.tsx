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

export function Question() {
  const dispatch = useAppDispatch();
  const { currentQuestionIndex, question, userAnswer } = useAppSelector(
    (state) => state.quiz
  );
    // Ensure the question array and current question exist
    if (!question || question.length === 0) {
      return <div>No questions available.</div>;
    }
  
  const currentQuestion = question[currentQuestionIndex];
  const currentAnswer = userAnswer[currentQuestionIndex];
  const handleQuestionAnswerChange = (answer: string) => {
    dispatch(setAnswer({ questionIndex: currentQuestionIndex, answer }));
  };
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
          {currentQuestion.options.map((option:any, index:any) => (
            <Button
              onClick={() => handleQuestionAnswerChange(option)}
              key={index}
              size={"lg"}
              className="w-full mt-5"
              variant={option===currentAnswer? "default" : "outline"}
            >
              {option}
            </Button>
          ))}
        </CardContent>
        {/* <CardFooter className="w-full"> */}
        <QuizControl />
        {/* </CardFooter> */}
      </Card>
    </div>
  );
}
