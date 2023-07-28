import React, { type FC, type ReactElement, useMemo } from 'react'
import { Modal } from '../../../components/Modal/Modal'
import { ModalOverlay } from '../../../components/Modal/ModalOverlay'
import { type User } from '../../../models/users'
import s from './UserInfoModal.sass'
import { UserInfoItem } from './UserInfoItem'

export interface UserInfoModalProps {
    user: User
    onClose: () => void
}

export const UserInfoModal: FC<UserInfoModalProps> = ({ user, onClose }) => {
    const content = useMemo((): ReactElement | null => {
        return Object.keys(user).map((item: keyof User) => (
            <UserInfoItem
                key={item}
                filedName={item}
                info={user[item]}
            />
        ))
    }, [user])

    return (
        <ModalOverlay onClose={onClose}>
            <Modal
                className={s.modal}
                modalTitle="Information"
                onClose={onClose}
            >
                {content}
            </Modal>
        </ModalOverlay>
    )
}
