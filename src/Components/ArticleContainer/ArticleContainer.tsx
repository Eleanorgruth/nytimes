import React, { FC , useEffect, useState} from 'react';
//import { TopStoriesObject } from '../../TypeUtilities/Interfaces';
// import { fetchTopStories } from '../../apiCalls';
import Article from '../Article/Article';
// import { TopStoriesObject } from '../../TypeUtilities/Interfaces';
import './ArticleContainer.css';
import { TopStoriesProps } from '../../TypeUtilities/Interfaces';

const ArticleContainer: FC<TopStoriesProps> = ({topStories}) => {
  // const [topStories, setTopStories] = useState<TopStoriesObject[]>([])
  // useEffect(()=> {
  //   fetchTopStories("home")
  //     .then(data => setTopStories(data.results))
  // }, [])
  const topStoriesArray = topStories.map((story, index)=> {
    return (
      <Article
        id={index}
        url={story.url}
        title={story.title}
        abstract={story.abstract}
        photo ={story.multimedia?.[0].url || "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"}
        caption ={story?.multimedia?.[0].caption || "no photo avalible"}
      />
    )
  })

  return(
    <div className='article-container'>
      {topStoriesArray}
    </div>
  )
}

export default ArticleContainer