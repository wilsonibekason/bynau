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
    DisplayPage: (state, action) => {
      if (state.page === 1) {
        return <CompanyMoreDescription />;
      } else if (state.page === 2) {
        return <CompanyMoreReviews />;
      } else {
        return <CompanySpecifications />;
      }
    },
  },
});

const { actions, reducer } = GlobalStateSlice;
/// states
export const pageState = (state) => state.globalState.page;
export const {} = actions;
export default reducer;
