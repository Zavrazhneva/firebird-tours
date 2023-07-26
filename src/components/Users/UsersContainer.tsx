import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../store/features/users/thunks';
import { Users } from '../../pages/Users/Users';

export const UsersContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return <Users />;
};