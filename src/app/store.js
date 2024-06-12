import { combineReducers, configureStore } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import loginReducer from "../features/auth/loginSlice";
import signUpReducer from "../features/auth/signUpSlice";


const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({ 
    userLogin: loginReducer,
    userSignUp: signUpReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export const persistor = persistStore(store)