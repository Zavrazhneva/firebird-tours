import React, { type FC } from 'react'
import s from './UserInfoItem.sass'
import { type LocalUser } from '../../../models/users'
import { MultilineInfoItem } from './MultilineInfoItem'

export interface UserInfoItemProps {
    filedName: string
    info: LocalUser[keyof LocalUser]
}

export const UserInfoItem: FC<UserInfoItemProps> = ({ filedName, info }) => {
    return (
        <div className={s.infoItem}>
            <span className={s.filedName}>{filedName}:</span>
            <div className={s.info}>
                {typeof info === 'string' && <div>{info}</div>}
                {typeof info === 'object' && (
                    <MultilineInfoItem infoItem={info} />
                )}
            </div>
        </div>
    )
}
