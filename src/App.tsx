import { Question } from "./Home/Question";
import QuizSummery from "./Home/QuizSummery";
import { Result } from "./Home/Result";
import { useAppSelector } from "./redux/hooks";

export default function Home() {
  const { quizComplete, moreResultInfo } = useAppSelector(
    (state) => state.quiz
  );
  return (
    <div>
      <h1 className="text-center text-9xl my-12">Quiz App</h1>
      {
        moreResultInfo?<Result /> :(quizComplete ? <QuizSummery /> : <Question />)
      }
      

     
    </div>
  );
}
