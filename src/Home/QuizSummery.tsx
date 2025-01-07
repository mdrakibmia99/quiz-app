import { Card, CardHeader } from "@/components/ui/card";
import { useAppSelector } from "@/redux/hooks";

export default function QuizSummery() {
  const { currentQuestionIndex, question, userAnswer, quizComplete } =
    useAppSelector((state) => state.quiz);
  const correctAnserCount= question.reduce((count,qn,index)=>{
 return qn.correctAnswer === userAnswer[index] ? count+1:count
  },0)
  console.log(correctAnserCount)
  return (
    <Card className="max-w-lg mx-auto p-6 rounded-xl shadow-xl">
      <CardHeader>
        <h2 className="text-2xl font-bold">Quiz Summary</h2>
      </CardHeader>
    </Card>
  );
}
