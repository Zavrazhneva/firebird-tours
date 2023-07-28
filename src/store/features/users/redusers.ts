import { type AnyAction } from 'redux'
import {
    DELETE_USER,
    GET_USERS,
    GET_USERS_FAIL,
    GET_USERS_SUCCESS,
    RESET_USERS,
    UPDATE_USERS_QUERY,
} from './actions'
import { type RootState } from '../../store'
import { type User } from '../../../models/users'
import { getFilteredUsers } from './utils'

export interface UsersState {
    searchQuery: string
    users: User[]
    originalUsers: User[]
    usersLoading: boolean
    error: boolean
}

const initialState: UsersState = {
    searchQuery: '',
    users: [],
    originalUsers: [],
    usersLoading: false,
    error: false,
}

export default function reducer(
    state = initialState,
    action: AnyAction
): UsersState {
    switch (action.type) {
        case RESET_USERS:
            return {
                ...state,
                users: [...state.originalUsers],
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(
                    (user) => user.id !== action.payload
                ),
            }
        case GET_USERS:
            return {
                ...state,
                usersLoading: true,
            }

        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                originalUsers: [...action.payload],
                usersLoading: false,
            }

        case GET_USERS_FAIL:
            return {
                ...state,
                usersLoading: false,
                error: true,
            }

        case UPDATE_USERS_QUERY:
            return {
                ...state,
                searchQuery: action.payload,
            }

        default:
            return state
    }
}

export const selectIsUsersChanged = (state: RootState): boolean =>
    state.usersData.users.length !== state.usersData.originalUsers.length
export const selectUsersLoading = (
    state: RootState
): UsersState['usersLoading'] => state.usersData.usersLoading
export const selectSearchQuery = (
    state: RootState
): UsersState['searchQuery'] => state.usersData.searchQuery
export const selectFilteredUsers = (state: RootState): User[] => {
    const { users, searchQuery } = state.usersData

    return  getFilteredUsers(users, searchQuery)
}

export const selectUserLoadingError = (state: RootState): boolean =>
    state.usersData.error
