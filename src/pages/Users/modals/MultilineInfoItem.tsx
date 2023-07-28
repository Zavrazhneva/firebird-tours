import React, { type FC } from 'react'
import { type UserAddress } from '../../../models/users'
import s from './MultilineInfoItem.sass'

export interface MultilineInfoItemProps {
    infoItem: Record<string, string>
}

export const MultilineInfoItem: FC<MultilineInfoItemProps> = ({ infoItem }) => {
    return Object.keys(infoItem).map((item: keyof UserAddress) => (
        <div
            className={s.infoItem}
            key={item}
        >
            <span>{item}: </span>
            <span>{infoItem[item]}</span>
        </div>
    ))
}
