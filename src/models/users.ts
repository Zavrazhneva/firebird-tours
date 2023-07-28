export interface UserAddress {
    street: string
    suite: string
    city: string
    zipcode: string
    geo?: {
        lat: string
        lng: string
    }
}

export interface UserCompany {
    bs: string
    catchPhrase: string
    name: string
}

export interface User {
    id: number
    name: string
    username: string
    address: UserAddress
    company: UserCompany
    email: string
    phone: string
    website: string
}

interface UserNew extends Omit<User, 'id' | 'address'> {
    address: Omit<UserAddress, 'geo'> & { geo?: string }
}

export function userMapper({ id, address, ...rest }: User): UserNew {
    const { geo, ...restAddress  } = address

    return {
        ...rest,
        address: {
            ...restAddress,
            geo: `${geo.lng}, ${geo.lat}`,
        },
    }
}
