import React, { type FC } from 'react'
import {
    selectFilteredUsers,
    selectIsUsersChanged,
    selectSearchQuery,
    selectUserLoadingError,
    selectUsersLoading,
} from '../../store/features/users/redusers'
import { useDispatch, useSelector } from 'react-redux'
import { Spinner } from '../../components/Spinner/Spinner'
import { UsersTable } from './UsersTable'
import { SearchInput } from '../../components/SearchInput/SearchInput'
import s from './UsersPage.sass'
import {
    resetUsers,
    updateUsersQuery,
} from '../../store/features/users/actions'
import { useModalWithData } from '../../hooks'
import { type User, userMapper } from '../../models/users'
import { UserInfoModal } from './modals/UserInfoModal'
import { Button } from '../../components/Button/Button'
import { type AnyAction } from 'redux'

export const UsersPage: FC = () => {
    const dispatch = useDispatch()
    const isUsersChanged = useSelector(selectIsUsersChanged)
    const usersLoading = useSelector(selectUsersLoading)
    const search = useSelector(selectSearchQuery)
    const filteredUsers = useSelector(selectFilteredUsers)
    const isError = useSelector(selectUserLoadingError)

    const {
        data: user,
        opened: userModalOpened,
        closeModal: closeUserModal,
        openModal: openUserModal,
    } = useModalWithData<User>()

    const handleSearch = (query: string): AnyAction =>
        dispatch(updateUsersQuery(query))
    const handleResetUsers = (): AnyAction => dispatch(resetUsers())

    if (isError) {
        return <div className={s.error}>Error</div>
    }

    if (usersLoading) {
        return <Spinner />
    }

    return (
        <div className={s.users}>
            <div className={s.header}>
                <SearchInput
                    value={search}
                    handleSearch={handleSearch}
                />
                {isUsersChanged && (
                    <Button
                        className={s.reset}
                        onClick={handleResetUsers}
                    >
                        Reset
                    </Button>
                )}
            </div>
            <div className={s.usersPageContent}>
                {filteredUsers.length > 0 ? (
                    <UsersTable
                        users={filteredUsers}
                        onRowClick={openUserModal}
                    />
                ) : (
                    <div className={s.emptyText}>User list is empty</div>
                )}
            </div>
            {user !== null && userModalOpened && (
                <UserInfoModal
                    user={userMapper(user)}
                    onClose={closeUserModal}
                />
            )}
        </div>
    )
}
