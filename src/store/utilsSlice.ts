import { createSlice } from "@reduxjs/toolkit";

type utilsState = {
  isMobileScreen: boolean;
  isLgScreen: boolean;
  scrolledTwoThirds: boolean;
  isSSR: boolean;
  menuOpened: boolean;
  searchInput: string;
};

const initialState: utilsState = {
  isMobileScreen: false,
  isLgScreen: false,
  scrolledTwoThirds: false,
  isSSR: true,
  menuOpened: false,
  searchInput: "",
};

const utilsSlice = createSlice({
  name: "utilsSlice",
  initialState,
  reducers: {
    setIsMobile(state, action) {
      state.isMobileScreen = action.payload;
    },
    setIsLgScreen(state, action) {
      state.isLgScreen = action.payload;
    },
    setScrolledTwoThirds(state, action) {
      state.scrolledTwoThirds = action.payload;
    },
    setIsSSR(state, action) {
      state.isSSR = action.payload;
    },
    setMenuOpened(state, action) {
      state.menuOpened = action.payload;
    },
    setSearchInput(state, action) {
      state.searchInput = action.payload;
    },
  },
});

export const utilsActions = utilsSlice.actions;
export default utilsSlice.reducer;
