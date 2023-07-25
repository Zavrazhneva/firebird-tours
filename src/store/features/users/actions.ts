import { User } from '../../../models/users';

export const GET_USERS = 'GET_USERS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAIL = 'GET_USERS_FAIL';

export const getUsers = () => ({
  type: GET_USERS,
});

export const getUsersSuccess = (users: Array<User>) => ({
  type: GET_USERS_SUCCESS,
  payload: users,
});

export const getUsersFail = () => ({
  type: GET_USERS_FAIL,
});