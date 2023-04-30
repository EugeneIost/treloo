export type DestinationCategoryType = "Popular" | "Adventure" | "Beath";

interface IDestination {
  title: string;
  location: string;
  rating: number;
  imageUrl: string;
  category: DestinationCategoryType;
}

export default IDestination;
