import { destinationCategories } from "@/constants/destinations";
import Subtitle from "../UI/Subtitle";
import DestinationCategory from "../UI/DestinationCategory";
import { useState } from "react";
import { DestinationCategoryType } from "@/types/Destination";
import DestinationCard from "../UI/DestinationCard";
import destinations from "@/constants/destinations";

import cn from "classnames";

const DestinationsSection = () => {
  const [activeCategory, setActiveCategory] =
    useState<DestinationCategoryType>("Popular");

  const clickCategoryHandler = (category: DestinationCategoryType) => {
    setActiveCategory(category);
  };

  return (
    <div
      className={cn(
        "py-[120px] px-[130px] bg-bg-color",
        "md:px-[20px]",
        "sm:px-[10px]"
      )}
    >
      <div className="mb-[40px] flex justify-center">
        <Subtitle>Recommended Destination</Subtitle>
      </div>

      <div className="flex flex-row justify-center mb-[80px]">
        {destinationCategories.map((category) => (
          <DestinationCategory
            key={category}
            activeCategory={activeCategory}
            onClick={() => {
              clickCategoryHandler(category);
            }}
          >
            {category}
          </DestinationCategory>
        ))}
      </div>

      <div className=" grid grid-cols-destinations gap-[20px] auto-rows-max">
        {destinations
          .filter((destination) => destination.category === activeCategory)
          .map((destination) => (
            <DestinationCard
              key={destination.title}
              destination={destination}
            />
          ))}
      </div>
    </div>
  );
};

export default DestinationsSection;
