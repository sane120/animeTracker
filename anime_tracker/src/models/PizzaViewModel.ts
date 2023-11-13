import { PizzaOverviews } from "./pizzaModels";

export interface IAppModel {
  pizzaList?: PizzaOverviews;
}

export class AppModel implements IAppModel {
  pizzaList?: PizzaOverviews | undefined;

  constructor(
    public config: {
      pizzaList?: PizzaOverviews
    }) {
    this.pizzaList = config.pizzaList ?? [];
  }


}

