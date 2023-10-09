export type Overviews = IOverview[]
export interface IOverview {
  mal_id: number
  url: string
  images: Images
  trailer: Trailer
  approved: boolean
  titles: Title[]
  title: string
  title_english?: string
  title_japanese: string
  title_synonyms: string[]
  type: string
  source: string
  episodes?: number
  status: string
  airing: boolean
  aired: Aired
  duration: string
  rating: string
  score?: number
  scored_by?: number
  rank?: number
  popularity: number
  members: number
  favorites: number
  synopsis?: string
  background?: string
  season?: string
  year?: number
  broadcast: Broadcast
  producers: StudioInformation[]
  licensors: StudioInformation[]
  studios: StudioInformation[]
  genres: Genre[]
  explicit_genres: any[]
  themes: Theme[]
  demographics: StudioInformation[]
}

export interface Images {
  jpg: MediaFormat
  webp: MediaFormat
}

export interface MediaFormat {
  image_url: string
  small_image_url: string
  large_image_url: string
}

export interface Images2 {
  medium_image_url?: string
  maximum_image_url?: string
  image_url?: string
  small_image_url?: string
  large_image_url?: string
}

export interface Trailer {
  youtube_id?: string
  url?: string
  embed_url?: string
  images: Images2
}



export interface Genre {
  mal_id: number
  type: string
  name: string
  url: string
}

export interface Theme extends Genre {
}

export interface Title {
  type: string
  title: string
}

export interface Aired {
  from?: string
  to?: string
  prop: Prop
  string: string
}

export interface Prop {
  from: FromDate
  to: To
}

export interface FromDate {
  day?: number
  month?: number
  year?: number
}

export interface To extends FromDate {
}

export interface Broadcast {
  day?: string
  time?: string
  timezone?: string
  string?: string
}

export interface StudioInformation {
  mal_id: number
  type: string
  name: string
  url: string
}
