import React, { FC, useEffect, useState } from 'react';
import { fetchTopStories } from '../apiCalls';
import './App.css';

const App: FC = () => {
// const [topStories, setTopStories] = useState
  useEffect(()=> {
    const test = fetchTopStories("home")
    console.log(test)
  }, [])
  return (
    <div className="App">
      <h1>New York Times</h1>
    </div>
  );
}

export default App;
