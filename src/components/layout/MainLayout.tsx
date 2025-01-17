/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Header from "../share/Header";
import { useGetAllQuizQuery } from "@/redux/features/quiz/quizApi";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { selectCurrentToken } from "@/redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { setAnswer } from "@/redux/features/quiz/quizSlice";
import Loading from "../share/Loading";

const MainLayout = () => {
  const token = useAppSelector(selectCurrentToken);
  const dispatch=useAppDispatch()
  const navigate=useNavigate()
  const { data, isLoading,isError } = useGetAllQuizQuery(undefined);
  const handleQuizStart=(quizId:string)=>{
    if(token){
       dispatch(setAnswer([]));
     navigate(`quiz/${quizId}`)
    }else{
      toast.warning('Please Login first!')
    }
  }
  if (isLoading) {
    return <Loading/>;
  }
console.log(data,isError,"all data loaded")
  return (
    <div>
      <Header />
      <h1 className="text-center text-9xl my-12">Quiz App</h1>
      <div className="container mx-auto px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {data &&
          data?.data?.map((quiz: any) => (
            <Card className="" key={quiz._id}>
              <CardHeader>
                <CardTitle className="text-xl">{quiz.title}</CardTitle>
                <CardDescription>{quiz.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button onClick={()=>handleQuizStart(quiz._id)}>Start Quiz</Button>
              </CardFooter>
            </Card>
          ))}
      </div>
      {/* {moreResultInfo ? (
        <Result />
      ) : quizComplete ? (
        <QuizSummery />
      ) : (
        <Question />
      )} */}
    </div>
  );
};

export default MainLayout;
