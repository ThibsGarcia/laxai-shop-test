
export type Category = 'All' | 'Headphones' | 'Earphones' | 'Speakers';

export interface FiltersInterface {
  search: string;
  priceRange: [number, number];
  category: Category;
}

export interface FilterUpdate {
  search?: string;
  priceRange?: [number, number];
  category?: Category;
}