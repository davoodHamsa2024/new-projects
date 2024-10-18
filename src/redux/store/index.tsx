import { configureStore } from "@reduxjs/toolkit";
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
import Slices from "../slice";

const persistConfig = {
  key: "auction",
  storage: storage,
  whitelist: ["Auth", "User", "Wallet"],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, Slices);

const middlewareConfigs = {
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
};
const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(middlewareConfigs),
});

const PersistedStore = persistStore(Store);
export { Store, PersistedStore };
