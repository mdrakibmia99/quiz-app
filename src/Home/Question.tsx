import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { setAnswer } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export function Question() {
  const dispatch=useAppDispatch()
  const { currentQuestionIndex, question, quizComplete, userAnswer } =
    useAppSelector((state) => state.quiz);
    const currentQuestion = question[currentQuestionIndex];
    const handleQuestionAnswerChange=(answer:string)=>{
      dispatch(setAnswer({questionIndex:currentQuestionIndex,answer}))
    }
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{currentQuestion.options}</CardTitle>
        <CardDescription>
          Question:{currentQuestionIndex + 1} of {question.length}{" "}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {currentQuestion.options.map((option, index) => (
          <Button onClick={()=>handleQuestionAnswerChange(option)} key={index} size={"lg"} className="w-full mt-5">
            {option}
          </Button>
        ))}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}
