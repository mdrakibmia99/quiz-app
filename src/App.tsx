import MainLayout from "./components/layout/MainLayout";
import ProtectedRoute from "./components/layout/ProtectedRoute";



export default function App() {
  // const { quizComplete, moreResultInfo } = useAppSelector(
  //   (state) => state.quiz
  // );
  return (
    <ProtectedRoute>
      <MainLayout/>
      {/* <div>
        <Header />
        <h1 className="text-center text-9xl my-12">Quiz App</h1>
        {moreResultInfo ? (
          <Result />
        ) : quizComplete ? (
          <QuizSummery />
        ) : (
          <Question />
        )}
      </div> */}
    </ProtectedRoute>
  );
}
