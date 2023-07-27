import {
  legacy_createStore as createStore,
  combineReducers,
  type AnyAction,
  compose,
  applyMiddleware,
  type Store,
} from 'redux';
import UserReducers, { type UsersState } from './features/users/redusers';
import thunk, { type ThunkAction } from 'redux-thunk';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export interface RootState {
  users: UsersState;
}

export type AppThunk<Return = void> = ThunkAction<Return,
  RootState,
  unknown,
  AnyAction>;

const combinedReducers = combineReducers<RootState>({
  users: UserReducers,
});

const composeEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?? compose;

const configureStore = (): Store =>
  createStore(combinedReducers, composeEnhancer(applyMiddleware(thunk)));

export default configureStore;