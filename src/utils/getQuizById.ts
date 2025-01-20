import { IQuizResponse } from "@/types/quiz.type";

export const getQuizById = (data: IQuizResponse[], id: string) => {
  const filterQuiz: IQuizResponse = data.find(
    (quiz: IQuizResponse) => quiz._id === id
  )!;
  return filterQuiz;
};
