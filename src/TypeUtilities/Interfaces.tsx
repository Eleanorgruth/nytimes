export interface TopStoriesObject {
  section: string
  subsection: string
  title: string
  abstract: string
  url: string
  uri: string
  byline: string
  item_type: string
  updated_date: string
  created_date: string
  published_date: string
  material_type_facet: string
  kicker: string
  des_facet: string[]
  org_facet: string[]
  per_facet: string[]
  geo_facet: string[]
  multimedia: Multimedia[]
}
export interface Multimedia {
  url: string
  format: string
  height: number
  width: number
  type: string
  subtype: string
  caption: string
  copyright: string
  short_url: string
}
export interface ArticleProps {
  id: number
  title: string
  url: string
  abstract: string
  photo: string
  caption: string
}

export interface TopStoriesProps {
  topStories: TopStoriesObject[];
}

export interface NavProps {
  setTopStoriesCategory: (category: string) => void;
}