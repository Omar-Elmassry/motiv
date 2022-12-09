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
    getStats: query<any, void>({
      query: () => "/stats",
      providesTags: ["home"],
    }),
    getAds: query<any, void>({
      query: () => "/ads",
      providesTags: ["home"],
    }),
    getCars: query<any, void>({
      query: () => "/cars",
      providesTags: ["home"],
    }),
    bestSellingCars: query<any, void>({
      query: () => "/best-selling",
      providesTags: ["home"],
    }),
  }),
});

export const {
  useGetAdsQuery,
  useGetStatsQuery,
  useGetCarsQuery,
  useBestSellingCarsQuery,
} = homeApi;
