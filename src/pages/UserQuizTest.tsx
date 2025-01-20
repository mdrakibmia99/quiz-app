import Loading from "@/components/share/Loading";
import { Question } from "@/Home/Question";
import QuizSummery from "@/Home/QuizSummery";
import { Result } from "@/Home/Result";
import { useGetAllQuizQuery } from "@/redux/features/quiz/quizApi";
import { useUserQuizResultQuery } from "@/redux/features/quizResult/quizResultApi";
import { IQuestion } from "@/types/quiz.type";
import { getQuizById } from "@/utils/getQuizById";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserQuizTest = () => {
  const { id } = useParams();
const navigate=useNavigate()
  // const { quizComplete, moreResultInfo ,} = useAppSelector(
  //   (state) => state.quiz
  // );
  // const { data, isLoading } = useGetAllQuizQuery(undefined);
  const { data: quizResultData, isLoading: quizResultLoading } =
    useUserQuizResultQuery(id);
    const { data, isLoading } = useGetAllQuizQuery(undefined);
  const [moreResultInfo, setMoreResultInfo] = useState(false);
 
  let filterCurrentQuiz;
  if (!isLoading) {
    filterCurrentQuiz = getQuizById(data?.data, id!);
    if (!filterCurrentQuiz) {
      navigate("/");
    }
  }
  const question: IQuestion[] = filterCurrentQuiz?.questions || [];
  // // console.log(data, "check user id");
  // if (!isLoading && !data) {
  //   navigate("/");
  // }

  if (quizResultLoading || isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-full h-full">
      {/* <Header /> */}
      <div className="grid place-items-center min-h-svh w-full">
        {moreResultInfo ? (
          <Result question={question} userAnswer={quizResultData?.data.userAnswer} />
        ) : quizResultData?.data?.quizComplete ? (
          <QuizSummery
          setMoreResultInfo={setMoreResultInfo} question={question}/>
        ) : (
          <Question question={question}/>
        )}
      </div>
    </div>
  );
};

export default UserQuizTest;
