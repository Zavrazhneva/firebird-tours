import React from 'react';
import { selectUsers, selectUsersLoading } from '../../store/features/users/redusers';
import { useSelector } from 'react-redux';
import { Spinner } from '../../components/Spinner/Spinner';
import { UsersTable } from './UsersTable';

export const Users = () => {

  const { users } = useSelector(selectUsers);
  const usersLoading = useSelector(selectUsersLoading);

  return <>
    {usersLoading && <Spinner />}
    {users && !usersLoading && <UsersTable users={users} />}
    {/*todo add error component*/}
  </>;
};