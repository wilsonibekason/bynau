import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  page: 1,
};
export const GlobalStateSlice = createSlice({
  name: "globalState",
  initialState,
  reducers: {},
});

const { actions, reducer } = GlobalStateSlice;
/// states
export const pageState = (state) => state.globalState.page;
export const {} = actions;
export default reducer;
