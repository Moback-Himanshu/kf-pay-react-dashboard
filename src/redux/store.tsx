import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import themeReducer from './slices/themeSlice';


const reducers = combineReducers({
  theme: themeReducer
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const isDevelopment = process.env.NODE_ENV !== 'production' && typeof window === 'object';

export const store = configureStore({
  reducer: persistedReducer,
  devTools: isDevelopment,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ immutableCheck: false }),
});


export const persistor = persistStore(store)
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
