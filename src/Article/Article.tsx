import React, { FC } from 'react';
import './Article.css';
import { Props } from '../TypeUtilities/Interfaces';

const Article: FC<Props> = ({title}) => {
  return (
    <h1>{title}</h1>
  )
}

export default Article