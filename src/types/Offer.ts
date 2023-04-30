export type OfferCategoryType = "Team" | "Couple" | "Family";

export default interface IOffer {
  imageUrl: string;
  date: string;
  category: OfferCategoryType;
  type: string;
  daysCount: number;
  nightsCount: number;
  title: string;
  price: number;
}
