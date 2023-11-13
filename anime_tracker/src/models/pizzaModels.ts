export type PizzaOverviews = IPizzaOverview[]
export interface IPizzaOverview {
  id: number;
  name: string;
  isGlutenFree?: boolean;
}
