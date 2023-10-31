import { Overviews } from "./animeModels";

export interface IAppModel {
  animeList?: Overviews;
}

export class AppModel implements IAppModel {
  animeList?: Overviews | undefined;

  constructor(
    public config: {
      animeList?: Overviews
    }) {
    this.animeList = config.animeList ?? [];
  }


}

