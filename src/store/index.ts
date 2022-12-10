import { configureStore } from "@reduxjs/toolkit";

import { homeApi } from "./homeApi";

import utilsReducer from "./utilsSlice";

const store = configureStore({
  reducer: {
    utils: utilsReducer,
    [homeApi.reducerPath]: homeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(homeApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
