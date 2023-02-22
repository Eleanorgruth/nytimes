import React, { FC } from 'react';
import ArticleContainer from '../ArticleContainer/ArticleContainer';
import './App.css';


const App: FC = () => {
//const [topStories, setTopStories] = useState<TopStoriesObject[]>([])
  // useEffect(()=> {
  //   fetchTopStories("home")
  //     .then(data => setTopStories(data.results))
  // }, [])
  return (
    <div className="App">
      <h1>New York Times</h1>
      <ArticleContainer/>
    </div>
  );
}

export default App;
