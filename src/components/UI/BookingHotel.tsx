import HotelCard from "./HotelCard";
import SearchButton from "./SearchButton";
import cn from "classnames";

const BookingHotel = () => {
  return (
    <div
      className={cn(
        "flex flex-row justify-around items-center gap-[20px]",
        "md:flex-col"
      )}
    >
      <HotelCard
        imageUrl="/images/hotels/fourseasons.jpg"
        title="Four Seasons Hotel"
      />

      <HotelCard
        imageUrl="/images/hotels/centralparknorth.jpg"
        title="Central Park North Hotel"
      />

      <SearchButton />
    </div>
  );
};

export default BookingHotel;
