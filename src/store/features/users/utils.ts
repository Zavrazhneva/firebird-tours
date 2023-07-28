import { type User } from '../../../models/users'

export const getFilteredUsers = (
    users: User[],
    searchQuery: string
): User[] => {
    return users?.filter((user) => {
        const name = user.name.toLowerCase()
        const username = user.username.toLowerCase()
        const email = user.email.toLowerCase()
        const query = searchQuery.toLowerCase()

        return (
            name.includes(query) ||
            username.includes(query) ||
            email.includes(query)
        )
    })
}
