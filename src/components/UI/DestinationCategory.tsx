import { MouseEventHandler, ReactNode } from "react";
import cn from "classnames";

interface DestinationCategoryProps {
  children: ReactNode;
  activeCategory: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const DestinationCategory = ({
  children,
  activeCategory,
  onClick,
}: DestinationCategoryProps) => {
  return (
    <div
      className={cn("px-[23px] py-[10px] cursor-pointer rounded-[10px]", {
        "bg-white": activeCategory === children,
      })}
      onClick={onClick}
    >
      <span
        className={cn("text-base font-semibold text-black/50", {
          "text-blue": activeCategory === children,
        })}
      >
        {children}
      </span>
    </div>
  );
};

export default DestinationCategory;
