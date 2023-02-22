import React, { FC } from 'react';
import './Article.css';
import { Props } from '../TypeUtilities/Interfaces';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Article: FC<Props> = ({title, photo, caption}) => {
  return (
    <Card sx={{ maxWidth: 345 , marginBottom: 5 }}>
    <CardMedia
      sx={{ height: 140 }}
      image={photo}
      title={`image of ${title}`}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {caption}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  )
}

export default Article