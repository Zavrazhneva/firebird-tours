import React, { type FC, useCallback } from 'react'
import {
    selectFilteredUsers,
    selectSearchQuery,
    selectUsers,
    selectUsersLoading,
} from '../../store/features/users/redusers'
import { useDispatch, useSelector } from 'react-redux'
import { Spinner } from '../../components/Spinner/Spinner'
import { UsersTable } from './UsersTable'
import { SearchInput } from '../../components/SearchInput/SearchInput'
import s from './UsersPage.sass'
import { resetUsers, updateUsersQuery } from '../../store/features/users/actions'
import { useModalWithData } from '../../hooks'
import { type User, userMapper } from '../../models/users'
import { UserInfoModal } from './modals/UserInfoModal'
import { ActionButton } from '../../components/ActionButton/ActionButton'

export const UsersPage: FC = () => {
    const dispatch = useDispatch()
    const { users } = useSelector(selectUsers)
    const usersLoading = useSelector(selectUsersLoading)
    const search = useSelector(selectSearchQuery)
    const filteredUsers = useSelector(selectFilteredUsers)

    const {
        data: user,
        opened: userModalOpened,
        closeModal: closeUserModal,
        openModal: openUserModal,
    } = useModalWithData<User>()

    const handleSearch = useCallback(
        (query) => dispatch(updateUsersQuery(query)),
        []
    )

    if (!usersLoading && users == null) {
        return <div className={s.error}>Error</div>
    }

    if (usersLoading) {
        return <Spinner />
    }

    return (
        <div className={s.users}>
            {
                <>
                <SearchInput
                    className={s.search}
                    value={search}
                    handleSearch={handleSearch}
                />
                     <ActionButton className={s.reset} onClick={() => dispatch(resetUsers())} >Reset</ActionButton>
                </>
            }
            <div className={s.usersPageContent}>
                {filteredUsers.length > 0 ? (
                    <UsersTable
                        users={filteredUsers}
                        openUserModal={openUserModal}
                    />
                ) : (
                    <div className={s.emptyText}>User list is empty</div>
                )}
            </div>
            {userModalOpened && (
                <UserInfoModal
                    user={userMapper(user)}
                    onClose={closeUserModal}
                />
            )}
        </div>
    )
}
