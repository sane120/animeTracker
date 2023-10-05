import {  OverviewArray } from "./animeSearch";

export class APIHandler {
  APICALL: string = "https://api.jikan.moe/v4/";

  getAnimeSearch = async (value: string) => {
    const response = await fetch(this.APICALL+`anime?q=${(value)}`);
    if (!response.ok) {  console.error(response); }
    const data = await response.json();
    return data.data as OverviewArray;
  };

}
