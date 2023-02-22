import React, { FC , useEffect, useState} from 'react';
import { fetchTopStories } from '../apiCalls';
import Article from '../Article/Article';
import { TopStoriesObject } from '../TypeUtilities/Interfaces';
import './ArticleContainer.css';

const ArticleContainer: FC = () => {
  const [topStories, setTopStories] = useState<TopStoriesObject[]>([])
  useEffect(()=> {
    fetchTopStories("home")
      .then(data => setTopStories(data.results))
  }, [])
  const topStoriesArray = topStories.map((story)=> {
    return (
      <Article
        title={story.title}
      />
    )
  })

  return(
    <div>
      {topStoriesArray}
    </div>
  )
}

export default ArticleContainer