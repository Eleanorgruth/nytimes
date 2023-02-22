import { Typography } from '@mui/material';
import React, { FC } from 'react';
import ArticleContainer from '../ArticleContainer/ArticleContainer';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <Typography variant='h2' component="h1">
        New York Times
      </Typography>
      <ArticleContainer/>
    </div>
  );
}

export default App;
