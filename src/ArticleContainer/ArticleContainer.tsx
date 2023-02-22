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
  const topStoriesArray = topStories.map((story, index)=> {
    return (
      <Article
        key={index}
        title={story.title}
        photo ={story.multimedia?.[0].url || "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"}
        caption ={story?.multimedia?.[0].caption || "no photo avalible"}
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