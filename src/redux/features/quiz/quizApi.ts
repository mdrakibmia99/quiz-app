import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllQuiz: builder.query({
      query: () => ({
        url: "/quizzes",
        method: "GET",

      }),
    }),
  }),
});

export const {useGetAllQuizQuery}=authApi
