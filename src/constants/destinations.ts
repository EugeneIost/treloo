import IDestination, { DestinationCategoryType } from "@/types/Destination";

const destinations: IDestination[] = [
  {
    category: "Beath",
    title: "Kina Mountain",
    location: "Cambodia",
    rating: 3.4,
    imageUrl: "/images/destinations/kina-mountain.jpg",
  },
  {
    category: "Beath",
    title: "Chomolungma",
    location: "Nepal",
    rating: 3.4,
    imageUrl: "/images/destinations/chomolungma.jpg",
  },
  {
    category: "Beath",
    title: "Caribbean Sea",
    location: "Cuba",
    rating: 4.5,
    imageUrl: "/images/destinations/caribbean-sea.jpg",
  },
  {
    category: "Beath",
    title: "Santa Monica Pier",
    location: "Los Angeles, USA",
    rating: 4.2,
    imageUrl: "/images/destinations/santa-monica-pier.jpg",
  },
  {
    category: "Adventure",
    title: "Škocjan Cave",
    location: "Karst Plateau, Slovenia",
    rating: 3.5,
    imageUrl: "/images/destinations/cave.jpg",
  },
  {
    category: "Adventure",
    title: "Waitomo",
    location: "New Zealand",
    rating: 3.7,
    imageUrl: "/images/destinations/waitomo.jpg",
  },
  {
    category: "Adventure",
    title: "The Blue Grotto",
    location: "Capri, Italy",
    rating: 4.1,
    imageUrl: "/images/destinations/blue-grotto.jpg",
  },
  {
    category: "Adventure",
    title: "Carlsbad Caverns",
    location: "New Mexico, USA",
    rating: 4.7,
    imageUrl: "/images/destinations/carlsbab-caverns.jpg",
  },
  {
    category: "Popular",
    title: "Sydney Opera House",
    location: "Sydney, Australia",
    rating: 4.5,
    imageUrl: "/images/destinations/sydney-opera-house.jpg",
  },
  {
    category: "Popular",
    title: "Coliseum",
    location: "Rome, Italy",
    rating: 4.8,
    imageUrl: "/images/destinations/coliseum.jpg",
  },
  {
    category: "Popular",
    title: "Taj Mahal",
    location: "India",
    rating: 4.5,
    imageUrl: "/images/destinations/taj-mahal.jpg",
  },
  {
    category: "Popular",
    title: "Pyramids of Giza",
    location: "Egypt",
    rating: 4.6,
    imageUrl: "/images/destinations/pyramids-of-giza.jpg",
  },
];

export const destinationCategories: DestinationCategoryType[] = [
  "Popular",
  "Adventure",
  "Beath",
];

export default destinations;
