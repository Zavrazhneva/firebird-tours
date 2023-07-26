import React, { FC, useMemo } from 'react';
import { User } from '../../models/users';
import {
  ColumnDef,
  createColumnHelper, flexRender, getCoreRowModel, useReactTable,
} from '@tanstack/react-table';
import { ActionButton } from '../../components/ActionButton/ActionButton';
import Delete from '../../icons/Delete';
import s from './UsersTable.sass';

export interface UsersTableProps {
  users: Array<User>;
}

export const UsersTable: FC<UsersTableProps> = ({ users }) => {
  const columnHelper = createColumnHelper<User>();

  const columns: Array<ColumnDef<User>> = useMemo(() => {
    return [
      columnHelper.accessor(row => row.name, {
        id: 'name',
        cell: info => <i>{info.getValue()}</i>,
        header: () => <span>Name</span>,
      }),
      columnHelper.accessor(row => row.username, {
        id: 'username',
        cell: info => <i>{info.getValue()}</i>,
        header: () => <span>Username</span>,
      }),
      columnHelper.accessor(row => row.email, {
        id: 'email',
        cell: info => <i>{info.getValue()}</i>,
        header: () => <span>Email</span>,
      }),
      columnHelper.accessor((row) => row, {
        id: 'delete',
        cell: () => <ActionButton className={s.button} onClick={() => null}><Delete /></ActionButton>,
      }),
    ];
  }, [columnHelper]);

  const table = useReactTable<User>({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className={s.table}>
      <thead>
      {table.getHeaderGroups().map(headerGroup => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map(header => (
            <th key={header.id}>
              {header.isPlaceholder
                ? null
                : flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
            </th>
          ))}
        </tr>
      ))}
      </thead>
      <tbody>
      {table.getRowModel().rows.map(row => (
        <tr key={row.id}>
          {row.getVisibleCells().map(cell => (
            <td key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
      </tbody>
    </table>
  );
};