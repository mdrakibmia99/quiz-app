import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUserQuizResult: builder.mutation({
      query: (quizInfo) => (
        {
        url: "/quiz/result",
        method: "POST",
        body: quizInfo,
      }),
      invalidatesTags: ['userQuizResult'],
    }),
    userQuizResult: builder.query({
      query: (quizId) => ({
        url: `/quiz/result/${quizId}`,
        method: "GET",
      }),
      providesTags: ['userQuizResult'],
    }),
  }),
});

export const { useUserQuizResultQuery, useCreateUserQuizResultMutation } =
  authApi;
