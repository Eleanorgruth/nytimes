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
  const [topStoriesCategory, setTopStoriesCategory] = useState<string>("home")
  useEffect(()=> {
    fetchTopStories(topStoriesCategory)
      .then(data => setTopStories(data.results))
  }, [topStoriesCategory])
  return (
    <div className="App">
      <Nav setTopStoriesCategory={setTopStoriesCategory}/>
      <Routes>
        <Route
          path="/"
          element={
            <ArticleContainer
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
