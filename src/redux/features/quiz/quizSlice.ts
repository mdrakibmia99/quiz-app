import { quizData } from "@/data/quizData";
import { createSlice } from "@reduxjs/toolkit";

interface IQuiz {
  question: typeof quizData;
  currentQuestionIndex: number;
  userAnswer: (string | null)[];
  quizComplete: boolean;
}

const initialState: IQuiz = {
  question: quizData,
  currentQuestionIndex: 0,
  userAnswer: Array(quizData.length).fill(null),
  quizComplete: false,
};
export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAnswer:(state,action)=>{
     console.log(action.payload)
    }
  },
});
export const{setAnswer}=quizSlice.actions

export default quizSlice.reducer;
