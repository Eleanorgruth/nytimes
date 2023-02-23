import { Typography, Container, Button } from '@mui/material';
import React, { FC } from 'react';
import './DetailedView.css';
import { useParams } from "react-router-dom"
import { TopStoriesProps, TopStoriesObject} from '../../TypeUtilities/Interfaces';
import Error from '../Error/Error';

const DetailedView: FC<TopStoriesProps> = ({ topStories }) => {
  const { id } = useParams<{ id: string }>()
  const selectedStory: TopStoriesObject = topStories[Number(id)]
  return (
    <div>
    {selectedStory ?
    <Container sx={{ maxWidth: "md", marginTop: 10 }}>
      <Typography 
        variant='h3'
        component="h2"
        sx={{
          flexGrow: 1,
          display: "block",
          fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }
        }}>
        {selectedStory.title}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {selectedStory.byline}
      </Typography>
      <div className='image-div'>
      <img
        className='selected-story-image'
        src={selectedStory.multimedia?.[0].url || "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"}
        alt={selectedStory?.multimedia?.[0].caption || "no photo avalible"}
        />
      <Typography className='caption' variant='body1' gutterBottom>
        {selectedStory?.multimedia?.[0].caption || ""}
      </Typography>
      </div>
      <Typography variant="h5" gutterBottom>
        {selectedStory.abstract}
      </Typography>
      <Button 
        variant="text"
        size="large"
        component="a"
        href={selectedStory.url}
        target="_blank"
        >
        Read the Article
      </Button>
    </Container> 
    : <Error/>
    }
    </div>
  )
}

export default DetailedView;