import { Overviews } from "./animeModels";

export class APIHandler {
  //basic API request variables
  base_url: string = "https://api.jikan.moe/v4/";
  getAnime_extension: string = "anime";
  queryString_extension: string = "?q=";

  //get anime by name
  getAnimeSearch = async (value: string) => {
    const response = await fetch(this.base_url + this.getAnime_extension + this.queryString_extension + value);
    if (!response.ok) { console.error(response); }
    const data = await response.json();
    return data.data as Overviews;
  };
}
