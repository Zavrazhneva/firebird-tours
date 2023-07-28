import React, { type ReactNode } from 'react'
import s from './MultilineInfoItem.sass'

export interface MultilineInfoItemProps<T = Record<string, string>> {
    infoItem: T
}

export const MultilineInfoItem = <
    T extends Record<string, string> = Record<string, string>,
>({
    infoItem,
}: MultilineInfoItemProps<T>): ReactNode => {
    return Object.entries(infoItem).map(([key, value]) => (
        <div
            className={s.infoItem}
            key={key}
        >
            <span>{key}: </span>
            <span>{value}</span>
        </div>
    ))
}
