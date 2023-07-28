import { type AnyAction } from 'redux'
import {
    DELETE_USER,
    GET_USERS,
    GET_USERS_FAIL,
    GET_USERS_SUCCESS, RESET_USERS,
    UPDATE_USERS_QUERY,
} from './actions'
import { type RootState } from '../../store'
import { type User } from '../../../models/users'
import { getFilteredUsers } from './utils'

export interface UsersState {
    searchQuery: string
    users: User[] | null
    originalUsers: User[] | null
    usersLoading: boolean
}

const initialState: UsersState = {
    searchQuery: '',
    users: null,
    originalUsers: null,
    usersLoading: false,
}

export default function reducer(
    state = initialState,
    action: AnyAction
): UsersState {
    switch (action.type) {
        case RESET_USERS:
            return  {
                ...state,
                users: [...state.originalUsers]
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users?.filter(
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

export const selectUsers = (state: RootState): UsersState => state.users
export const selectUsersLoading = (
    state: RootState
): UsersState['usersLoading'] => state.users.usersLoading
export const selectSearchQuery = (
    state: RootState
): UsersState['searchQuery'] => state.users.searchQuery
export const selectFilteredUsers = (state: RootState): User[] => {
    const { users, searchQuery } = state.users

    return users === null ? [] : getFilteredUsers(users, searchQuery)
}
