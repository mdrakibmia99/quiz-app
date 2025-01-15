/* eslint-disable @typescript-eslint/no-explicit-any */
import { quizData } from "@/data/quizData";
import { createSlice } from "@reduxjs/toolkit";

interface IQuiz {
  question:any;
  currentQuestionIndex: number;
  userAnswer: (string | null)[];
  quizComplete: boolean;
  moreResultInfo:boolean;  
}

const initialState: IQuiz = {
  question: null,
  currentQuestionIndex: 0,
  userAnswer: Array(quizData.length).fill(null),
  quizComplete: false,
  moreResultInfo:false
};
export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { questionIndex, answer } = action.payload;
      state.userAnswer[questionIndex] = answer;
    },
    nextQuestion: (state) => {
      if (state?.question && state.currentQuestionIndex < state?.question.length - 1)
        state.currentQuestionIndex += 1;
    },
    previousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) state.currentQuestionIndex -= 1;
    },
    completeQuestion: (state) => {
      state.quizComplete = true;
  },
    quizResultCheck: (state) => {
      state.moreResultInfo = true;
      state.currentQuestionIndex = 0;
  },
    setQuiz: (state,{payload}) => {
      state.question = payload; 
  },
  },
});
export const { setAnswer,setQuiz, nextQuestion,previousQuestion ,completeQuestion,quizResultCheck} = quizSlice.actions;

export default quizSlice.reducer;
