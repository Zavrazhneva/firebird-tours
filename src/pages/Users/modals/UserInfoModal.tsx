import React, { type FC } from 'react'
import { Modal } from '../../../components/Modal/Modal'
import { ModalOverlay } from '../../../components/Modal/ModalOverlay'
import { type LocalUser } from '../../../models/users'
import s from './UserInfoModal.sass'
import { UserInfoItem } from './UserInfoItem'

export interface UserInfoModalProps {
    user: LocalUser
    onClose: () => void
}

export const UserInfoModal: FC<UserInfoModalProps> = ({ user, onClose }) => {
    const content = Object.entries(user).map(([key, value]) => (
        <UserInfoItem
            key={key}
            filedName={key}
            info={value}
        />
    ))

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
