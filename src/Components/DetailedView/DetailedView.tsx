import { Typography, Container } from '@mui/material';
import React, { FC } from 'react';
import './DetailedView.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useParams } from "react-router-dom"
import { TopStoriesProps, TopStoriesObject, Multimedia } from '../../TypeUtilities/Interfaces';

const DetailedView: FC<TopStoriesProps> = ({topStories}) => {
  const { id } = useParams<{id: string}>();
  const selectedStory:TopStoriesObject = topStories[Number(id)]
  return (
    <Container sx={{maxWidth:"lg", marginTop:10}}>
        <Typography variant='h3' component="h2">
          {selectedStory.title}
        </Typography>
    
    </Container>
    
    
  
  )
}

export default DetailedView;