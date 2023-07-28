import React, { type FC, type HTMLAttributes } from 'react'
import { createPortal } from 'react-dom'
import s from './ModalOverlay.sass'
import cx from 'classnames'

export type McuModalOverlayProps = {
    onClose?: React.MouseEventHandler<HTMLDivElement>
    backgroundColor?: string
    container?: HTMLElement
} & HTMLAttributes<HTMLDivElement>

export const ModalOverlay: FC<McuModalOverlayProps> = ({
    className,
    onClose,
    backgroundColor,
    container,
    children,
}) => {
    return createPortal(
        <div
            className={cx(s.overlay, className)}
            style={{ backgroundColor }}
            onMouseDown={(e) => {
                if (e.currentTarget === e.target) {
                    onClose?.(e)
                }
            }}
        >
            {children}
        </div>,
        container ?? document.body
    )
}
