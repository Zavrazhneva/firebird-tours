import { legacy_createStore as createStore, combineReducers, AnyAction, compose, applyMiddleware } from 'redux';
import UserReducers, { UsersState } from './features/users/redusers';
import thunk, { ThunkAction } from 'redux-thunk';

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
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () =>
  createStore(combinedReducers, composeEnhancer(applyMiddleware(thunk)));

export default configureStore;