import Header from "@/components/share/Header";
import { Question } from "@/Home/Question";
import QuizSummery from "@/Home/QuizSummery";
import { Result } from "@/Home/Result";
import { useGetSingleQuizQuery } from "@/redux/features/quiz/quizApi";
import { setQuiz } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useNavigate, useParams } from "react-router-dom";

const UserQuizTest = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { quizComplete, moreResultInfo ,} = useAppSelector(
    (state) => state.quiz
  );
  const { data, isLoading } = useGetSingleQuizQuery(id);
  console.log(id, "check user id");
  if (!isLoading && !data) {
    navigate("/");
  }
  if(!isLoading && data){
    console.log(data,"check quiz data")    
    dispatch(setQuiz(data.data.questions))
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(data,"check user")
  return (
    <div className="w-full h-full">
      <Header />
      <div className="grid place-items-center min-h-svh w-full">
        {moreResultInfo ? (
          <Result />
        ) : quizComplete ? (
          <QuizSummery />
        ) : (
          <Question />
        )}
      </div>
    </div>
  );
};

export default UserQuizTest;
