import { useAppSelector } from "@/redux/hooks";
import Header from "../share/Header";
import { Result } from "@/Home/Result";
import QuizSummery from "@/Home/QuizSummery";
import { Question } from "@/Home/Question";
import { useGetAllQuizQuery } from "@/redux/features/quiz/quizApi";

const MainLayout = () => {
  const { quizComplete, moreResultInfo } = useAppSelector(
    (state) => state.quiz
  );
  const { data } = useGetAllQuizQuery(undefined);
  console.log(data, "quiz data");
  return (
    <div>
      <Header />
      <h1 className="text-center text-9xl my-12">Quiz App</h1>
      {moreResultInfo ? (
        <Result />
      ) : quizComplete ? (
        <QuizSummery />
      ) : (
        <Question />
      )}
    </div>
  );
};

export default MainLayout;
