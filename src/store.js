import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore, PERSIST } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./features/rootReducer";
// import delayMiddleware from "./middleware/delayMiddleware";

const persistConfig = {
    key: "root",
    storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: { ignoreActions: [PERSIST] } })
//     .concat(delayMiddleware),
});

export const persistor = persistStore(store);
