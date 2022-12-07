import { configureStore } from "@reduxjs/toolkit";

import { homeApi } from "./homeApi";

// import { rtkQueryErrorLogger } from "./middleware/RTKErrorLogger";

const store = configureStore({
  reducer: {
    [homeApi.reducerPath]: homeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(homeApi.middleware)
      // .concat(rtkQueryErrorLogger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
