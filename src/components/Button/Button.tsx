import React, {
    type FC,
    type HTMLAttributes,
    type PropsWithChildren,
} from 'react'
import s from './Button.sass'
import cx from 'classnames'

export type ButtonProps = {
    onClick: React.MouseEventHandler<HTMLDivElement>
} & HTMLAttributes<HTMLDivElement>

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
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
