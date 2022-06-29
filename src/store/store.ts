import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from "react-redux";
import logger from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import beersReducer from "./beers/beersSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  beers: beersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
export const persistor = persistStore(store);
