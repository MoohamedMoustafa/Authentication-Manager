import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { loginLocal } from "../store/userSlice";

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
        body: { ...credentials, returnSecureToken: true },
        headers: {
          "Content-Type": "application/json",
        },
      }),
      async onQueryStarted(args, {dispatch, queryFulfilled}){
        try {
          const {data} = await queryFulfilled;
          dispatch(loginLocal(data));
        } catch (error) {
          console.log("error in signup query", error);
          
        }
      },

      transformErrorResponse: (res) => ({
        message: res.data?.error?.message || "unknown error occured",
        code: res.data?.error?.code || 400,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: `${LOGIN}${API_KEY}`,
        method: "POST",
        body: { ...credentials, returnSecureToken: true },
        headers: {
          "Content-Type": "application/json",
        },
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const {data} = await queryFulfilled;
          dispatch(loginLocal(data))
        } catch (error) {
          console.log("error in login query", error);
        }
      },
      transformErrorResponse: (res) => ({
        message: res.data?.error?.message || "unknown error occured",
        code: res.data?.error?.code || 400,
      }),
      transformResponse: (res) => res.idToken,
    }),
  }),
});

export const { useSignupMutation, useLoginMutation } = authService;
