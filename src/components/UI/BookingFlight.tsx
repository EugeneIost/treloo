import AirplaneIcon from "./AirplaneIcon";
import CalendarIcon from "./CalendarIcon";
import SearchButton from "./SearchButton";

import cn from "classnames";

const BookingFlight = () => {
  return (
    <div
      className={cn(
        "flex flex-row justify-between",
        "lg:justify-center lg:items-center",
        "md:flex-col md:gap-[40px]"
      )}
    >
      <div
        className={cn(
          "flex flex-row justify-between w-full mr-[40px]",
          "lg:flex-col lg:items-center lg:justify-center lg:mr-0",
          "md:gap-[20px]"
        )}
      >
        <div
          className={cn(
            "border-light-gray border-2 rounded-[25px] flex flex-row items-center justify-between px-[22px] min-h-[154px] flex-[0_0_40%]",
            "lg:w-[90%] lg:mb-[20px] lg:flex-[0_0_100%]",
            "sm:px-[10px]"
          )}
        >
          <div className="flex flex-col">
            <span className="mb-1 text-base font-medium text-black/50">
              Living From
            </span>
            <span className={cn("text-xl font-medium", "sm:text-lg")}>
              Dubai
            </span>
          </div>

          <div className="w-[40px] h-[40px] border-dashed border-black/50 border flex items-center justify-center rounded-full">
            <AirplaneIcon color="#999999" />
          </div>

          <div className="flex flex-col">
            <span className="mb-1 text-base font-medium text-black/50">
              Going to
            </span>
            <span className={cn("text-xl font-medium", "sm:text-lg")}>
              New York
            </span>
          </div>
        </div>

        <div
          className={cn(
            "border-light-gray border-2 rounded-[25px] flex flex-row items-center justify-between px-[22px] min-h-[154px] flex-[0_0_55%]",
            "lg:w-[90%] lg:flex-[0_0_100%]",
            "sm:px-[10px]"
          )}
        >
          <div className="flex flex-col">
            <div className="flex flex-row items-center">
              <span className="mb-1 text-base font-medium text-black/50 mr-2">
                Leave
              </span>
              <AirplaneIcon />
            </div>
            <span className={cn("text-xl font-medium", "sm:text-lg")}>
              23 Jan, Sat
            </span>
          </div>

          <div className="w-[40px] h-[40px] border-dashed border-black/50 border flex items-center justify-center rounded-full">
            <CalendarIcon />
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row items-center">
              <span className="mb-1 text-base font-medium text-black/50 mr-2">
                Return
              </span>
              <div className="rotate-180">
                <AirplaneIcon />
              </div>
            </div>
            <span className={cn("text-xl font-medium", "sm:text-lg")}>
              14 Jan, Thu
            </span>
          </div>
        </div>
      </div>

      <SearchButton />
    </div>
  );
};

export default BookingFlight;
