import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/product/productApiSlice';
import favouritSlice from '../features/product/favouritSlice';
import storage from 'redux-persist/es/storage';
import { persistReducer, persistStore } from 'redux-persist';


const persitConifg = {
    key: 'root',
    storage,
    whitelist: ['favourite']
}

const rootReducer = combineReducers({
    favourite: favouritSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
})




const persistedReducer = persistReducer(persitConifg, rootReducer)
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getdefaultMiddleware) => {

        return getdefaultMiddleware().concat(apiSlice.middleware);
    }
})

export const persistor = persistStore(store)
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;