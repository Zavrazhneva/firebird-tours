import React from 'react';
import { selectUsers, selectUsersLoading } from '../../store/features/users/redusers';
import { useSelector } from 'react-redux';
import { Spinner } from '../Spinner/Spinner';

export const Users = () => {

  const { users } = useSelector(selectUsers);
  const usersLoading = useSelector(selectUsersLoading);

  if (usersLoading) {
    return <Spinner />;
  }

  return (
    <ul>
      {users && users.map(item => <li>
        {item.username}
      </li>)}
    </ul>
  );
};