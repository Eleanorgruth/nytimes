import { Typography } from '@mui/material';
import ArticleContainer from '../ArticleContainer/ArticleContainer';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DetailedView from '../DetailedView/DetailedView';
import React, { FC , useEffect, useState} from 'react';
import { fetchTopStories } from '../../apiCalls';
import { TopStoriesObject } from '../../TypeUtilities/Interfaces';
import Nav from '../Nav/Nav';

const App: FC = () => {
  const [topStories, setTopStories] = useState<TopStoriesObject[]>([])
  useEffect(()=> {
    fetchTopStories("home")
      .then(data => setTopStories(data.results))
  }, [])
  return (
    <div className="App">
      <Nav/>
      {/* <Typography variant='h2' component="h1">
        New York Times
      </Typography> */}
      <Routes>
        <Route
          path="/"
          element={<ArticleContainer
            topStories={topStories}
            />}
        />
        <Route
          path="/:id"
          element={<DetailedView
            topStories={topStories}
            />}
        />
      </Routes>
    </div>
  )
}

export default App;
