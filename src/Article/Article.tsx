import React, { FC } from 'react';
import './Article.css';
import { Props } from '../TypeUtilities/Interfaces';

const Article: FC<Props> = ({title, photo, caption}) => {
  return (
    <div>
      <h2>{title}</h2>
      <img className='image-preview' src={photo} alt={caption}/> 
    </div>
  )
}

export default Article