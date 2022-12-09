import { configureStore } from "@reduxjs/toolkit";

import { homeApi } from "./homeApi";

import utilsReducer from "./utilsSlice";

// import { rtkQueryErrorLogger } from "./middleware/RTKErrorLogger";

const store = configureStore({
  reducer: {
    utils: utilsReducer,
    [homeApi.reducerPath]: homeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(homeApi.middleware),
  // .concat(rtkQueryErrorLogger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
