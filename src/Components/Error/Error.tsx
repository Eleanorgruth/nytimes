import React, { FC } from 'react';
import './Error.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom"

const Error: FC= () => {
  return (
    <Card sx={{ maxWidth: 500 , margin: '0 auto', marginBottom: 5, marginTop: 10 }}>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        404
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Oops! Page not found
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        size="small"
        component={Link}
        to={`/`}
      >
        Home page
      </Button>
    </CardActions>
  </Card>
  )
}

export default Error