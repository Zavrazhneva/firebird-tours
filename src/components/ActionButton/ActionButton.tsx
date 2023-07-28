import React, {
    type FC,
    type HTMLAttributes,
    type PropsWithChildren,
} from 'react'
import s from './ActionButton.sass'
import cx from 'classnames'

export type ActionButtonProps = {
    onClick: () => void
} & HTMLAttributes<HTMLDivElement>

export const ActionButton: FC<PropsWithChildren<ActionButtonProps>> = ({
    className,
    children,
    onClick,
}) => {
    return (
        <div
            onClick={onClick}
            className={cx(s.button, className)}
        >
            {children}
        </div>
    )
}
