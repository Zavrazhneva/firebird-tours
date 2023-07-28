import React, { type FC, useMemo } from 'react'
import { type User } from '../../models/users'
import {
    type AccessorColumnDef,
    type ColumnDef,
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    type Row,
    useReactTable,
} from '@tanstack/react-table'
import { ActionButton } from '../../components/ActionButton/ActionButton'
import Delete from '../../icons/Delete'
import s from './UsersTable.sass'
import { TextWithHighlight } from '../../components/TextWithHighlight/TextWithHighlight'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../../store/features/users/actions'

export interface UsersTableProps {
    users: User[]
    openUserModal: (user: User) => void
}

const getColumnData = (id: string): AccessorColumnDef => ({
    id,
    cell: (info) => <TextWithHighlight text={info.getValue()} />,
    header: () => <span>{id.toUpperCase()}</span>,
})

export const UsersTable: FC<UsersTableProps> = ({ users, openUserModal }) => {
    const columnHelper = createColumnHelper<User>()
    const dispatch = useDispatch()
    const handleUserDelete: React.MouseEventHandler = (e, row: Row<User>) => {
        e.stopPropagation()
        dispatch(deleteUser(row.original.id))
    }

    const columns: Array<ColumnDef<User>> = useMemo(() => {
        return [
            columnHelper.accessor((row) => row.name, getColumnData('name')),
            columnHelper.accessor(
                (row) => row.username,
                getColumnData('username')
            ),
            columnHelper.accessor((row) => row.email, getColumnData('email')),
            columnHelper.accessor((row) => row, {
                id: 'delete',
                cell: ({ row }) => (
                    <ActionButton
                        className={s.button}
                        onClick={(e) => {
                            handleUserDelete(e, row)
                        }}
                    >
                        <Delete />
                    </ActionButton>
                ),
            }),
        ]
    }, [columnHelper])

    const table = useReactTable<User>({
        data: users,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <table className={s.table}>
            <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th key={header.id}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                          header.column.columnDef.header,
                                          header.getContext()
                                      )}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {table.getRowModel().rows.map((row) => (
                    <tr
                        key={row.id}
                        onClick={() => {
                            openUserModal(row.original)
                        }}
                    >
                        {row.getVisibleCells().map((cell) => (
                            <td key={cell.id}>
                                {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                )}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
