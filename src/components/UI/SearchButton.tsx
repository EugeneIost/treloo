import SearchIcon from "./SearchIcon";
import cn from "classnames";

const SearchButton = () => {
  return (
    <button
      className={cn(
        "min-w-[154px] min-h-[154px] max-w-[154px] max-h-[154px] rounded-[65px] flex items-center justify-center bg-blue/80",
        "lg:max-w-[100px] lg:max-h-[100px] lg:min-w-[100px] lg:min-h-[100px]"
      )}
    >
      <SearchIcon />
    </button>
  );
};

export default SearchButton;
