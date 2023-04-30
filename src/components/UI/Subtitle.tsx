import { ReactNode } from "react";
import cn from "classnames";

interface SubtitleProps {
  children: ReactNode;
}

const Subtitle = ({ children }: SubtitleProps) => {
  return (
    <h1 className={cn("text-xxl font-semibold", "sm:text-xl")}>{children}</h1>
  );
};

export default Subtitle;
