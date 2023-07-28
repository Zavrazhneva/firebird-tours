import React, { type ReactElement } from 'react'
import s from './App.sass'
import { UsersContainer } from './components/Users/UsersContainer'

export const App = (): ReactElement => {
    return (
        <div className={s.app}>
            <UsersContainer />
        </div>
    )
}
