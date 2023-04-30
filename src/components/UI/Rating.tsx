import { ReactNode } from "react";
import StarIcon from "./StarIcon";

interface RaitingProps {
  children: ReactNode;
}

const Raiting = ({ children }: RaitingProps) => {
  return (
    <div className="rounded-[25px] bg-white flex flex-row items-center justify-center w-[55px] h-[20px]">
      <div>
        <StarIcon />
      </div>
      <span className="text-[12px]/[18px] font-medium ml-[2px] mt-[3px]">
        {children}
      </span>
    </div>
  );
};

export default Raiting;
