import { ReactNode } from "react";
import cn from "classnames";

interface TitleProps {
  children: ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <h1
      className={cn(
        "text-xxxl text-white font-semibold text-center",
        "md:text-xxl",
        "sm:text-[36px]/[48px]"
      )}
    >
      {children}
    </h1>
  );
};

export default Title;
