import React, {
    type FC,
    type HTMLAttributes,
    type PropsWithChildren,
} from 'react'
import s from './Modal.sass'
import Close from '../../icons/Close'
import { ActionButton } from '../ActionButton/ActionButton'
import cx from 'classnames'

export type ModalProps = {
    modalTitle: string
    onClose: () => void
} & HTMLAttributes<HTMLDivElement>

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
    modalTitle,
    onClose,
    children,
    className,
}) => {
    return (
        <div className={cx(s.modal, className)}>
            <div className={s.modalHeader}>
                {modalTitle}
                <ActionButton
                    className={s.close}
                    onClick={onClose}
                >
                    <Close />
                </ActionButton>
            </div>
            <div className={s.modalBody}>{children}</div>
        </div>
    )
}
