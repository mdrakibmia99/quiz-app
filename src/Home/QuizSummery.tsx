/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import {  useAppSelector } from "@/redux/hooks";

export default function QuizSummery({setMoreResultInfo}:{setMoreResultInfo:any}) {
  // const dispatch=useAppDispatch()
  const { question, userAnswer } = useAppSelector((state) => state.quiz);
  const correctAnswerCount = question.reduce((count:any, qn:any, index:any) => {
    return qn.correctAnswer === userAnswer[index] ? count + 1 : count;
  }, 0);
  const correctProgressValue = parseFloat(
    ((correctAnswerCount / question.length) * 100).toFixed(2)
  );
  // Get performance rating and progress bar color based on the correct percentage
  const { rating, color } = getPerformance(correctProgressValue);
  const incorrectAnswersCount = question.length - correctAnswerCount;

  return (
    <Card className="max-w-lg mx-auto p-6 rounded-xl shadow-xl">
      <CardHeader>
        <h2 className="text-2xl font-bold">Quiz Summary</h2>
      </CardHeader>
      <CardContent>
        <h3 className="text-xl font-medium mb-4 ">
          You got {correctAnswerCount} out of {question.length} correct!
        </h3>
        {/* Progress Bar */}
        <div className="mb-4">
          <Progress
            value={correctProgressValue}
            className={`h-4 rounded-full ${color} `}
          />
          <div className="flex justify-between mt-2">
            <span className="text-sm">{correctProgressValue}%</span>
            <span className="text-sm">Performance: {rating}</span>
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-4">
          <p className="text-sm">
            <strong>Incorrect Answers:</strong> {incorrectAnswersCount}
          </p>
        </div>

        <div className="mt-4">
          <p className="text-sm">
            Great job! Keep practicing to improve your performance.
          </p>
        </div>
        <Button
        // onClick={()=>dispatch(quizResultCheck())}
        onClick={()=>setMoreResultInfo(true)}
        className="mt-5">Check Quiz Result</Button>
      </CardContent>
    </Card>
  );
}

// Helper function to get performance rating and color based on the percentage
const getPerformance = (percentage: number) => {
  if (percentage >= 90) {
    return { rating: "Excellent", color: "bg-green-800" };
  } else if (percentage >= 50) {
    return { rating: "Good", color: "bg-yellow-500" };
  } else if (percentage >= 30) {
    return { rating: "Needs Improvement", color: "bg-orange-500" };
  } else {
    return { rating: "Poor", color: "bg-red-500" };
  }
};
