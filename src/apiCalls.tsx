export const fetchTopStories = (storyType: string) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${storyType}.json?api-key=xEzcE5GwTQbhAEWHq273iROt7J0niVp6`)
    .then(respone => respone.json())
}