import offers, { offerCategories } from "@/constants/offers";
import Subtitle from "../UI/Subtitle";
import OfferCard from "../UI/OfferCard";
import { useState } from "react";
import { OfferCategoryType } from "@/types/Offer";
import OfferCategory from "../UI/OfferCategory";
import cn from "classnames";

const OffersSection = () => {
  const [activeCategory, setActiveCategory] =
    useState<OfferCategoryType>("Team");

  const clickCategoryHandler = (category: OfferCategoryType) => {
    setActiveCategory(category);
  };

  return (
    <div
      className={cn(
        "pt-[385px] w-full bg-bg-color px-[130px] pb-[160px]",
        "md:px-[20px]",
        "sm:px-[10px]",
        "md:pt-[470px]"
      )}
    >
      <div className="mb-[60px] flex items-center justify-center">
        <Subtitle>Special Upcoming Offers</Subtitle>
      </div>

      <div className="w-[340px] h-[66px] flex flex-row justify-around items-center bg-white rounded-[10px] mx-auto mb-[40px] shadow-[0_0_6px_rgba(0,0,0,0.05)]">
        {offerCategories.map((category) => (
          <OfferCategory
            key={category}
            activeCategory={activeCategory}
            onClick={() => clickCategoryHandler(category)}
          >
            {category}
          </OfferCategory>
        ))}
      </div>

      <div
        className={cn(
          "grid grid-cols-offers gap-[20px] auto-rows-max",
          "sm:grid-cols-1"
        )}
      >
        {offers
          .filter((offer) => offer.category === activeCategory)
          .map((offer) => (
            <OfferCard offer={offer} key={offer.title} />
          ))}
      </div>
    </div>
  );
};

export default OffersSection;

// flex flex-row justify-between
