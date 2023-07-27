import React, { type FC, useCallback } from 'react';
import {
  selectFilteredUsers,
  selectSearchQuery,
  selectUsers,
  selectUsersLoading,
} from '../../store/features/users/redusers';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from '../../components/Spinner/Spinner';
import { UsersTable } from './UsersTable';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import s from './UsersPage.sass';
import { updateUsersQuery } from '../../store/features/users/actions';

export const UsersPage: FC = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(selectUsers);
  const usersLoading = useSelector(selectUsersLoading);
  const search = useSelector(selectSearchQuery);
  const filteredUsers = useSelector(selectFilteredUsers);

  const handleSearch = useCallback(
    (query) => dispatch(updateUsersQuery(query)),
    [],
  );

  if (!usersLoading && (users == null)) {
    return <div>Error</div>;
  }

  if (usersLoading) {
    return <Spinner />;
  }

  return <div className={s.users}>
    {<SearchInput className={s.search} value={search} handleSearch={handleSearch} />}
    <div className={s.usersPageContent}>
      {(filteredUsers.length > 0) ?
        <UsersTable users={filteredUsers} /> :
        <div className={s.emptyText}>Список пользователей пуст</div>
      }
    </div>
  </div>;
};