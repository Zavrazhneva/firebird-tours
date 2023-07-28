import React, { type FC, useEffect } from 'react'
import { getUsers } from '../../store/features/users/thunks'
import { UsersPage } from '../../pages/Users/UsersPage'
import { useAppDispatch } from '../../store/store'

export const UsersContainer: FC = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        // @ts-expect-error fixme
        dispatch(getUsers())
    }, [])

    return <UsersPage />
}
