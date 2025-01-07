import { Button } from "@/components/ui/button";
import { nextQuestion } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch } from "@/redux/hooks";

const QuizControl = () => {
  const dispatch = useAppDispatch();
  const handleNextQuestion = () => {
    dispatch(nextQuestion());
  };
  return (
    <div className="flex justify-between p-6">
      <Button> Previous</Button>
      <Button onClick={handleNextQuestion}> Next</Button>
    </div>
  );
};

export default QuizControl;
