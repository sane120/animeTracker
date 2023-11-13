import { Overviews } from "./animeModels";
import { PizzaOverviews } from "./pizzaModels";

export class APIHandler {
static sendFavoritesData(favorites: any) {
throw new Error('Method not implemented.');
}
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
  getPizzaData = async (): Promise<PizzaOverviews | null> => {
    try {
      const response = await fetch("https://localhost:44306/Pizza");
      if (!response.ok) {
        console.error("Request failed with status: " + response.status);
        return null;
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("An error occurred while fetching data: " + error);
      return null;
    }
  };

  private backendBaseUrl: string = 'https://localhost:44306';

  sendFavoritesData = async (favorites: number[]) => {
    try {
      const response = await fetch(`${this.backendBaseUrl}/Anime/saveFavorites`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(favorites),
      });

      if (!response.ok) {
        console.error('POST favorites failed with status: ' + response.status);
        return false;
      }
      return true;
    } catch (error) {
      console.error('An error occurred while sending favorites data: ' + error);
      return false;
    }
  };

  async removeFavorite(animeId: number): Promise<boolean> {
    try {
      const response = await fetch(`${this.backendBaseUrl}/Anime/favorites/${animeId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        console.error('DELETE request failed with status: ' + response.status);
        return false;
      }

      return true;
    } catch (error) {
      console.error('An error occurred while removing anime from favorites: ' + error);
      return false;
    }
  }


}
