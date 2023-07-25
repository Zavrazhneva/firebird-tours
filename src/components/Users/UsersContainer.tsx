import React, { useEffect } from 'react';
import { Users } from './Users';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../store/features/users/thunks';

export const UsersContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return <Users />;
};