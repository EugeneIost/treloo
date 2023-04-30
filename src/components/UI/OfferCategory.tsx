import { MouseEventHandler, ReactNode } from "react";
import cn from "classnames";
import { OfferCategoryType } from "@/types/Offer";

interface OfferCategoryProps {
  children: ReactNode;
  activeCategory: OfferCategoryType;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const OfferCategory = ({
  children,
  activeCategory,
  onClick,
}: OfferCategoryProps) => {
  return (
    <div
      className={cn(
        "w-[100px] h-[46px] flex items-center justify-center rounded-[10px] cursor-pointer",
        {
          "bg-blue": activeCategory === children,
        }
      )}
      onClick={onClick}
    >
      <span
        className={cn("text-base font-medium text-black/50", {
          "text-white": activeCategory === children,
        })}
      >
        {children}
      </span>
    </div>
  );
};

export default OfferCategory;
