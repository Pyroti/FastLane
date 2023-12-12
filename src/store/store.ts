import { AnyAction, applyMiddleware, legacy_createStore as createStore } from 'redux';
import { persistStore, persistReducer, Storage } from 'redux-persist';
import { MMKV } from 'react-native-mmkv';
import { ThunkDispatch, thunk } from 'redux-thunk';
import { rootReducer } from './reducers';
import { useDispatch } from 'react-redux';

const storage = new MMKV();

export const reduxStorage: Storage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key) => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: (key) => {
    storage.delete(key);
    return Promise.resolve();
  },
};

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
};

const middleware = [thunk];

const persistedReducer = persistReducer(persistConfig, rootReducer as never);

export const store = createStore(persistedReducer, applyMiddleware(...middleware));
export const persist = persistStore(store);

export type ReduxState = ReturnType<typeof rootReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;

export const useTypedDispatch = () => useDispatch<TypedDispatch>();
