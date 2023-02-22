import { Typography } from '@mui/material';
import React, { FC } from 'react';
import './DetailedView.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useParams } from "react-router-dom"

const srcset = (image: string, size: number, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  }
}
const DetailedView: FC = () => {
  const { article } = useParams();
  console.log(article)

  return (
    <h1>Test</h1>
  )
  // return (
  //   <ImageList
  //     sx={{ width: 500, height: 450 }}
  //     variant="quilted"
  //     cols={4}
  //     rowHeight={121}
  //   >
  //     {itemData.map((item) => (
  //       <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
  //         <img
  //           {...srcset(item.img, 121, item.rows, item.cols)}
  //           alt={item.title}
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //     ))}
  //   </ImageList>
  // );
}

export default DetailedView;