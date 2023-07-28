import axios from 'axios'
import * as actions from './actions'
import { type AppThunk } from '../../store'

export const getUsers = (): AppThunk => async (dispatch) => {
    dispatch(actions.getUsers())

    try {
        const res = await axios.get(
            `https://jsonplaceholder.typicode.com/users `
        )

        dispatch(actions.getUsersSuccess(res.data))
    } catch (e: any) {
        dispatch(actions.getUsersFail())
    }
}
