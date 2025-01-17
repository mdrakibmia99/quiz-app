
import Loading from "@/components/share/Loading";
import { Question } from "@/Home/Question";
import QuizSummery from "@/Home/QuizSummery";
import { Result } from "@/Home/Result";
import { useGetSingleQuizQuery } from "@/redux/features/quiz/quizApi";
import { setQuiz } from "@/redux/features/quiz/quizSlice";
import { useUserQuizResultQuery } from "@/redux/features/quizResult/quizResultApi";
import { useAppDispatch } from "@/redux/hooks";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserQuizTest = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [mainLoading,setMainLoading]=useState(false)


  // const { quizComplete, moreResultInfo ,} = useAppSelector(
  //   (state) => state.quiz
  // );
  const { data, isLoading } = useGetSingleQuizQuery(id);
  const { data:quizResultData, isLoading:quizResultLoading } = useUserQuizResultQuery(id);
  const [moreResultInfo,setMoreResultInfo] =useState(false)

  useEffect(()=>{
    setMainLoading(true)
    if(!isLoading && data){
      // console.log(data,"check quiz data")    
      dispatch(setQuiz(data.data.questions))
      // console.log(data,"check quiz dataasdfasdfasdfsf")
      setMainLoading(false)    
    }
    setMainLoading(false)
  },[isLoading,data])
  console.log(data, "check user id");
  if (!isLoading && !data) {
    navigate("/");
  }
  
  if (isLoading || mainLoading || quizResultLoading) {
    return <Loading/>;
  }
console.log(quizResultData,"quizResultData")
  return (
    <div className="w-full h-full">
      {/* <Header /> */}
      <div className="grid place-items-center min-h-svh w-full">
        {moreResultInfo ? (
          <Result userAnswer={quizResultData?.data.userAnswer}/>
        ) : quizResultData?.data?.quizComplete ? (
          <QuizSummery setMoreResultInfo={setMoreResultInfo}/>
        ) : (
          <Question />
          )}

      </div>
    </div>
  );
};

export default UserQuizTest;
