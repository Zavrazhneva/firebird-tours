import {
    legacy_createStore as createStore,
    combineReducers,
    type AnyAction,
    compose,
    applyMiddleware,
} from 'redux'
import {
    useDispatch,
    useSelector,
    type TypedUseSelectorHook,
} from 'react-redux'
import UserReducers from './features/users/redusers'
import thunk, { type ThunkAction } from 'redux-thunk'

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

export type AppDispatch = ReturnType<typeof configureStore>['dispatch']
export type RootState = ReturnType<
    ReturnType<typeof configureStore>['getState']
>

export type AppThunk<Return = void> = ThunkAction<
    Return,
    RootState,
    unknown,
    AnyAction
>

const combinedReducers = combineReducers({
    usersData: UserReducers,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?? compose

// eslint-disable-next-line
const configureStore = () =>
    createStore(combinedReducers, composeEnhancer(applyMiddleware(thunk)))

export default configureStore
type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
