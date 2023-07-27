import React, { type FC } from 'react';
import { useSelector } from 'react-redux';
import { selectSearchQuery } from '../../store/features/users/redusers';

export interface TextWithHighlightProps {
  text: string;
}

export const TextWithHighlight: FC<TextWithHighlightProps> = ({ text }) => {
  const query = useSelector(selectSearchQuery);

  if (query === '') {
    return <div>{text}</div>;
  }


  return <div dangerouslySetInnerHTML={{
    __html: text.replace(new RegExp(query, 'gi'), (match: string) => `<mark>${match}</mark>`),
  }}>
  </div>;
};