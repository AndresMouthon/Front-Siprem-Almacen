import { isRejectedWithValue, Middleware } from "@reduxjs/toolkit";
import { BaseError } from "../utils/baseResponse.ts";
import { clear_Tokens, clear_All } from "../features/redux";

export const expirationMiddleware: Middleware =
  (store) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      const error = action.payload as BaseError;
      if (error && error.data && error.data?.status === 401) {
        store.dispatch(clear_Tokens());
        store.dispatch(clear_All());
      }
    }

    return next(action);
  };
