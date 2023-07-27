import React, { type FC, type HTMLAttributes } from 'react';
import s from './SearchInput.sass';
import cx from 'classnames';

export type SearchInputProps = {
  value: string;
  handleSearch: (search: string) => void;
} & HTMLAttributes<HTMLDivElement>;

export const SearchInput: FC<SearchInputProps> = ({ value, handleSearch, className, placeholder }) => {
  return (
    <input
      value={value}
      className={cx(className, s.input)}
      placeholder={placeholder ?? 'Поиск'}
      onChange={(event) => {
        handleSearch(event.currentTarget.value);
      }}
    />
  );
};
