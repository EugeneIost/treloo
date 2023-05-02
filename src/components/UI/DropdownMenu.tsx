import NavItem from "./NavItem";
import cn from "classnames";

interface DropdownMenuProps {
  isActive: boolean;
  onClick: () => void;
}

const DropdownMenu = ({ onClick, isActive }: DropdownMenuProps) => {
  return (
    <>
      {isActive && (
        <div className="absolute w-[100vw] h-[100vh] top-0 left-0 bg-black/70 z-40" />
      )}
      <div
        className={cn(
          "absolute top-0 right-0 w-[70vw] h-[100vh] flex flex-col bg-bg-color z-50 pl-[35px] translate-x-full transition-all",
          {
            "translate-x-0": isActive,
          }
        )}
      >
        <button
          className="absolute w-[24px] h-[20px] top-[32px] right-[24px]"
          onClick={onClick}
        >
          <span className="inline-block h-[2px] w-full bg-menu rotate-45 absolute left-0" />
          <span className="inline-block h-[2px] w-full bg-menu -rotate-45 absolute left-0" />
        </button>
        <ul className="list-none mt-[35px] flex flex-col gap-[30px]">
          <NavItem color="menu">Review</NavItem>
          <NavItem color="menu">Tips</NavItem>
          <NavItem color="menu">Alerts</NavItem>
          <NavItem color="menu">Blog</NavItem>
        </ul>
      </div>
    </>
  );
};

export default DropdownMenu;
