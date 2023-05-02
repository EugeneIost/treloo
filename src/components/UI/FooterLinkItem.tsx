import { ReactNode } from "react";
import cn from "classnames";

interface FooterLinkItemProps {
  children: ReactNode;
}

const FooterLinkItem = ({ children }: FooterLinkItemProps) => {
  return (
    <li
      className={cn(
        "text-xl/[36px] text-black/75 font-medium cursor-pointer hover:text-blue transition-all mr-[50px] last:mr-0",
        "lg:text-lg/[30px]",
        "sm:mr-[20px]"
      )}
    >
      {children}
    </li>
  );
};

export default FooterLinkItem;
