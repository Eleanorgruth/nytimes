import { Typography } from '@mui/material';
import React, { FC } from 'react';
import ArticleContainer from '../ArticleContainer/ArticleContainer';
import { Route, Routes } from 'react-router-dom';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <Typography variant='h2' component="h1">
        New York Times
      </Typography>
      <Routes>
        <Route
          path="/"
          element={<ArticleContainer/>}
        />
        {/* <Route
          path="/:article"
        /> */}
      </Routes>
    </div>
  );
}

export default App;
