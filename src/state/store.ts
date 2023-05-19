import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import formsReducer from "./forms/formsSlice";
import fieldsReducer from "./forms/fieldsSlice";

export const store = configureStore({
  reducer: {
    forms: formsReducer,
    fields: fieldsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
