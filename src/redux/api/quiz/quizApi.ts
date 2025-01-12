import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const quizApi = createApi({
  reducerPath: "quizApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["Quiz"],
  endpoints: (builder) => ({
    getAllQuiz: builder.query({
      query: () => `/quizzes`,
      providesTags: ["Quiz"],
    }),
    addQuiz: builder.mutation({
      query: (body) => ({
    
        url: `/quizzes`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Quiz"],
    }),
    updateQuiz: builder.mutation({
      query: ({id,data},) => ({
        url: `/quizzes/${id}`,
        method: "PATCH",
        data,
      }),
    }),
    deleteQuiz: builder.mutation({
      query: (id) => ({
        url: `/quizzes/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetAllQuizQuery,useAddQuizMutation } = quizApi;
