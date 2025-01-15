import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllQuiz: builder.query({
      query: () => ({
        url: "/quizzes",
        method: "GET",

      }),
    }),
    getSingleQuiz: builder.query({
      query: (quizId) => ({
        url: `/quizzes/${quizId}`,
        method: "GET",

      }),
    }),
  }),
});

export const {useGetAllQuizQuery,useGetSingleQuizQuery}=authApi
