import { createSlice } from "@reduxjs/toolkit";
import {
  CompanyMoreDescription,
  CompanyMoreReviews,
  CompanySpecifications,
} from "../../../../component/product/productmaindisplay/companyMore";
const initialState = {
  page: 1,
};
export const GlobalStateSlice = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    DisplayPage: (state, action) => {},
  },
});

const { actions, reducer } = GlobalStateSlice;
/// states
export const pageState = (state) => state.globalState.page;
export const { DisplayPage } = actions;
export default reducer;
