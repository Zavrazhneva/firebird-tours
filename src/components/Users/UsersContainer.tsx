import React, { type FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../store/features/users/thunks';
import { UsersPage } from '../../pages/Users/UsersPage';

export const UsersContainer: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return <UsersPage />;
};