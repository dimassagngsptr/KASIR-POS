import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { subCategorySlice } from "./subCategorySlice";
import { categorySlice } from "./categorySlice";

const rootReducer = combineReducers({
  categories: categorySlice.reducer,
  subCategories: subCategorySlice.reducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
