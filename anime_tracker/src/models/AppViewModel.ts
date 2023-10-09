import { Overviews } from "./animeModels";

export interface IAppViewModel {
  searchField?: string;
  animeList?: Overviews;
}

export class AppViewModel implements IAppViewModel {
  searchField?: string | undefined;
  animeList?: Overviews | undefined;

  constructor(
    public config: {
      searchField?: string
      animeList?: Overviews
    }){
      this.searchField = config.searchField ?? "";
      this.animeList = config.animeList ?? [];
    }


}

