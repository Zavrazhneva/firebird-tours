import { AnyAction } from 'redux';
import { GET_USERS, GET_USERS_FAIL, GET_USERS_SUCCESS } from './actions';
import { RootState } from '../../store';
import { User } from '../../../models/users';

export interface UsersState {
  users: Array<User> | null,
  usersLoading: boolean,
}

const initialState: UsersState = {
  users: null,
  usersLoading: false,
};

export default function reducer(
  state = initialState,
  action: AnyAction,
): UsersState {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        usersLoading: true,
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        usersLoading: false,
      };

    case GET_USERS_FAIL:
      return {
        ...state,
        users: null,
        usersLoading: false,
      };

    default:
      return state;
  }
}

export const selectUsers = (state: RootState) => state.users;
export const selectUsersLoading = (state: RootState) =>
  state.users.usersLoading;