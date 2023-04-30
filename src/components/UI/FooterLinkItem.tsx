import { ReactNode } from "react";
import cn from "classnames";

interface FooterLinkItemProps {
  children: ReactNode;
}

const FooterLinkItem = ({ children }: FooterLinkItemProps) => {
  return (
    <li
      className={cn(
        "text-xl/[36px] text-black/75 font-medium cursor-pointer hover:text-blue transition-all",
        "lg:text-lg/[30px]"
      )}
    >
      {children}
    </li>
  );
};

export default FooterLinkItem;
