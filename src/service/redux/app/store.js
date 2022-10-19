import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import GlobalStateReducer from "../features/globalslice/GlobalStateSlice";
const logger = createLogger();

const store = configureStore({
  reducer: {
    globalState: GlobalStateReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
