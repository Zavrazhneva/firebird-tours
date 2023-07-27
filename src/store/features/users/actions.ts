import { type User } from '../../../models/users';
import { type AnyAction } from 'redux';

export const GET_USERS = 'GET_USERS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAIL = 'GET_USERS_FAIL';
export const UPDATE_USERS_QUERY = 'UPDATE_USERS_QUERY';

export const getUsers = (): AnyAction => ({
  type: GET_USERS,
});

export const getUsersSuccess = (users: User[]): AnyAction => ({
  type: GET_USERS_SUCCESS,
  payload: users,
});

export const getUsersFail = (): AnyAction => ({
  type: GET_USERS_FAIL,
});

export const updateUsersQuery = (searchQuery: string): AnyAction => {

  console.log('updateUsersQuery');
  return {
    type: UPDATE_USERS_QUERY,
    payload: searchQuery,
  };
};