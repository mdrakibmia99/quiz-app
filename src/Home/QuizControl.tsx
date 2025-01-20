/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
    completeQuestion,
  nextQuestion,
  previousQuestion,
} from "@/redux/features/quiz/quizSlice";
import { useCreateUserQuizResultMutation } from "@/redux/features/quizResult/quizResultApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { IQuestion } from "@/types/quiz.type";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const QuizControl = ({setCurrentQuestionIndex,currentQuestionIndex,question}:{setCurrentQuestionIndex:any,currentQuestionIndex:number,question:IQuestion[]}) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [quizResultCreate]=useCreateUserQuizResultMutation()
  const {  userAnswer } =
    useAppSelector((state) => state.quiz);
  const isAnswerQuiz = userAnswer[currentQuestionIndex];
  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex+1)
    dispatch(nextQuestion());
  };
  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex-1)
    dispatch(previousQuestion());
  };
  const handleCompletedQuestion=async() => {
  const quizResult={quizId:id,userAnswer}
    await quizResultCreate(quizResult)
    toast.success('quiz completed')
    dispatch(completeQuestion());

  }
  // const isCompleteQuiz =
  //   isAnswerQuiz || currentQuestionIndex !== question.length - 1;

  return (
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

      {currentQuestionIndex === question.length - 1 && (
        <Button
        onClick={handleCompletedQuestion}
        disabled={userAnswer.length !== question.length}> Quiz Complete</Button>
      )}
    </div>
  );
};

export default QuizControl;
