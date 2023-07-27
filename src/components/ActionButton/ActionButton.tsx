import React, { type FC, type PropsWithChildren } from 'react';
import s from './ActionButton.sass';
import cx from 'classnames';

export interface ActionButtonProps {
  className: string;
  onClick: () => void;
}

export const ActionButton: FC<PropsWithChildren<ActionButtonProps>> = ({ className, children, onClick }) => {
  return <div onClick={onClick} className={cx(s.button, className)}>{children}</div>;
};