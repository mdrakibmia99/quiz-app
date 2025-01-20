export interface IQuizResponse {
  _id: string;
  title: string;
  description: string;
  questions: IQuestion[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  _id: string;
}
