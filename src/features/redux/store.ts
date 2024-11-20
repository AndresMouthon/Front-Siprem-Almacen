import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
} from "redux-persist";
import { Persistor } from "redux-persist/es/types";
import storage from "redux-persist/lib/storage";
import { authApi } from "../../api/auth/authApi.ts";
import { expirationMiddleware } from "../../middleware/expirationMiddleware.ts";
import { usersSlice } from "../redux/users/userSilce.ts";
import { tokenSlice } from "./token/tokenSilce.ts";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["token", "users"],
};

const rootReducer = combineReducers({
    token: tokenSlice.reducer,
    users: usersSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(authApi.middleware, expirationMiddleware),
});

const persistor: Persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { persistor, store };

