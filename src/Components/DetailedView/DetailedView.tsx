import { Typography, Container } from '@mui/material';
import React, { FC } from 'react';
import './DetailedView.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useParams } from "react-router-dom"
import { TopStoriesProps, TopStoriesObject, Multimedia } from '../../TypeUtilities/Interfaces';

const DetailedView: FC<TopStoriesProps> = ({ topStories }) => {
  const { id } = useParams<{ id: string }>();
  const selectedStory: TopStoriesObject = topStories[Number(id)]
  return (
    <Container sx={{ maxWidth: "lg", marginTop: 10 }}>
      <Typography variant='h3' component="h2">
        {selectedStory.title}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {selectedStory.byline}
      </Typography>
      <img
        className='selected-story-image'
        src={selectedStory.multimedia?.[0].url || "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"}
        alt={selectedStory?.multimedia?.[0].caption || "no photo avalible"}
      />
      <Typography variant='body1' gutterBottom>
        {selectedStory?.multimedia?.[0].caption || ""}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {selectedStory.abstract}
      </Typography>
    </Container>



  )
}

export default DetailedView;