import { ReactNode } from "react";
import cn from "classnames";

interface NavItemProps {
  children: ReactNode;
  color?: string;
}

const NavItem = ({ children, color = "white" }: NavItemProps) => {
  return (
    <li
      className={cn(
        `font-medium text-xl text-${color} hover:text-blue transition-all cursor-pointer`,
        "md:text-lg"
      )}
    >
      {children}
    </li>
  );
};

export default NavItem;
