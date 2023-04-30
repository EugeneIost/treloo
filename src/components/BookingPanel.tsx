import { useState } from "react";
import cn from "classnames";
import AirplaneIcon from "./UI/AirplaneIcon";
import HotelIcon from "./UI/HotelIcon";
import BookingFlight from "./UI/BookingFlight";
import BookingHotel from "./UI/BookingHotel";

const BookingPanel = () => {
  const [contentToggle, setContentToggle] = useState(true);

  const clickToggleHandler = () => {
    setContentToggle((current) => !current);
  };

  return (
    <div
      className={cn(
        "w-[1180px] h-fit py-[60px] px-[48px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.1)] rounded-e-[50px] rounded-b-[50px] relative",
        "xl:w-full",
        "sm:py-[20px] sm:px-0 sm:rounded-e-none sm:rounded-b-none"
      )}
    >
      {contentToggle && <BookingFlight />}
      {!contentToggle && <BookingHotel />}
      <div
        className={cn(
          "w-[279px] h-[100px] bg-white rounded-t-[25px] absolute left-0 top-0 -translate-y-full flex flex-row items-center justify-between pt-[10px] px-[10px]",
          "sm:w-full"
        )}
      >
        <div
          className={cn(
            "flex flex-row items-center justify-center w-[121px] h-[66px]  rounded-[25px] cursor-pointer",
            {
              "bg-blue/20": contentToggle,
            }
          )}
          onClick={clickToggleHandler}
        >
          <div className="-rotate-45">
            <AirplaneIcon />
          </div>

          <span className="text-base font-medium text-black ml-1">Flight</span>
        </div>

        <div
          className={cn(
            "flex flex-row items-center justify-center w-[121px] h-[66px]  rounded-[25px] cursor-pointer",
            {
              "bg-blue/20": !contentToggle,
            }
          )}
          onClick={clickToggleHandler}
        >
          <HotelIcon />

          <span className="text-base font-medium text-black ml-1">Hotel</span>
        </div>
      </div>
    </div>
  );
};

export default BookingPanel;
