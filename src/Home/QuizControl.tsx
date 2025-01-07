import { Button } from "@/components/ui/button";
import { nextQuestion, previousQuestion } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch } from "@/redux/hooks";

const QuizControl = () => {
  const dispatch = useAppDispatch();
  const handleNextQuestion = () => {
    dispatch(nextQuestion());
  };
  const handlePreviousQuestion = () => {
    dispatch(previousQuestion());
  };
  return (
    <div className="flex justify-between p-6">
      <Button onClick={handlePreviousQuestion}> Previous</Button>
      <Button onClick={handleNextQuestion}> Next</Button>
    </div>
  );
};

export default QuizControl;
