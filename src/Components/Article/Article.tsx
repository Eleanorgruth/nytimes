import React, { FC } from 'react';
import './Article.css';
import { Props } from '../../TypeUtilities/Interfaces';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom"

const Article: FC<Props> = ({title, photo, caption, abstract, url}) => {
  return (
    <Card sx={{ maxWidth: 345 , marginBottom: 5 }}>
    <CardMedia
      sx={{
        height: 0,
        paddingTop: '56.25%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain'
      }}
      image={photo}
      title={`image of ${caption}`}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {abstract}
      </Typography>
    </CardContent>
    <CardActions>
      <Button 
        size="small"
        component="a"
        href={url}
        target="_blank"
      >
        Read this Article
      </Button>
      <Button
        size="small"
        component={Link}
        to={`/${title}`}
      >
        Learn More
      </Button>
    </CardActions>
  </Card>
  )
}

export default Article