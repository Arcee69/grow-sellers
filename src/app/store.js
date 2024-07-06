import { combineReducers, configureStore } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import loginReducer from "../features/auth/loginSlice";
import signUpReducer from "../features/auth/signUpSlice";
import addProductReducer from "../features/products/addProductSlice";
import getProductsReducer from "../features/products/getProductsSlice";
import getCategoryReducer from "../features/categories/getCategorySlice";
import getProfileReducer from "../features/profile/getProfileSlice";
import updatePasswordReducer from "../features/profile/updatePasswordSlice";
import getOrdersReducer from "../features/orders/getOrdersSlice";
import getAnalyticsReducer from "../features/analytics/getAnalyticsSlice";
import getTransactionReducer from "../features/transaction/getTransactionSlice";
import getSoldItemsReducer from "../features/orders/getSoldItemsSlice";


const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({ 
    userLogin: loginReducer,
    userSignUp: signUpReducer,
    addProducts: addProductReducer,
    allProducts: getProductsReducer,
    productCategories: getCategoryReducer,
    getProfile: getProfileReducer,
    updatePassword: updatePasswordReducer,
    allOrders: getOrdersReducer,
    getAnalytics: getAnalyticsReducer,
    getTransaction: getTransactionReducer,
    getSoldItems: getSoldItemsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export const persistor = persistStore(store)