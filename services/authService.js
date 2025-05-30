import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://identitytoolkit.googleapis.com/v1/accounts";
const API_KEY = "AIzaSyBMmU8m5Sq5dw5kAKqniX0daYjncgDBLe0";
const SIGNUP = ":signUp?key=";
const LOGIN = ":signInWithPassword?key=";
export const authService = createApi({
  reducerPath: "authService",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (credentials) => ({
        url: `${SIGNUP}${API_KEY}`,
        method: "POST",
        body: {...credentials, returnSecureToken: true},
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: `${LOGIN}${API_KEY}`,
        method: "POST",
        body: {...credentials, returnSecureToken: true},
        headers: {
          "Content-Type": "application/json",
        },
      })
    })
  }),
});


export const {useSignupMutation, useLoginMutation} = authService;
