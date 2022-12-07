import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_HEADERS } from "config/dataService";

export const homeApi = createApi({
  reducerPath: "homeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `/api`,
    prepareHeaders: BASE_HEADERS,
    mode: "cors",
  }),
  tagTypes: ["home"],

  endpoints: ({ query, mutation }) => ({
    getHome: query<any, void>({
      query: () => "/test",
      providesTags: ["home"],
    }),
  }),
});

export const { useGetHomeQuery } = homeApi;
