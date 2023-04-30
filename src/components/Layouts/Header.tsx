import { useState } from "react";
import BurgerMenuButton from "../UI/BurgerMenuButton";
import NavItem from "../UI/NavItem";
import cn from "classnames";
import DropdownMenu from "../UI/DropdownMenu";

const Header = () => {
  const [isDropdownMenuActive, setIsDropdownMenuActive] = useState(false);
  return (
    <div
      className={cn(
        "w-full h-[120px] flex flex-row justify-around items-center"
      )}
    >
      <h2 className="font-medium text-xxl text-white">Treloo</h2>
      <nav>
        <div className={cn("hidden", "lt:block")}>
          <BurgerMenuButton onClick={() => setIsDropdownMenuActive(true)} />
          <DropdownMenu
            onClick={() => setIsDropdownMenuActive(false)}
            isActive={isDropdownMenuActive}
          />
        </div>

        <ul
          className={cn(
            "list-none flex flex-row gap-[50px]",
            "md:gap-[30px]",
            "lt:hidden"
          )}
        >
          <NavItem>Review</NavItem>
          <NavItem>Tips</NavItem>
          <NavItem>Alerts</NavItem>
          <NavItem>Blog</NavItem>
          <button className="text-xl/9 font-medium text-blue w-[140px] h-65px bg-white rounded-[10px] hover:bg-blue hover:text-white transition-all">
            Blog
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
