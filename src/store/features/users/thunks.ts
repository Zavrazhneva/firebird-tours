import { AppThunk } from '../../store';
import axios, { AxiosError } from 'axios';
import * as actions from './actions';

export const getUsers = (): AppThunk => async (dispatch) => {
  dispatch(actions.getUsers());

  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users `,
    );

    dispatch(actions.getUsersSuccess(res.data));
  } catch (e: AxiosError) {
    dispatch(actions.getUsersFail());
  }
};