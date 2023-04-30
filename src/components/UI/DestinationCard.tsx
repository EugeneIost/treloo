import IDestination from "@/types/Destination";
import Image from "next/image";
import LocationIcon from "./LocationIcon";
import Raiting from "./Rating";

interface DestinationCardProps {
  destination: IDestination;
}

const DestinationCard = ({ destination }: DestinationCardProps) => {
  return (
    <div
      className="flex flex-col p-[10px] bg-white rounded-[25px] relative items-center"
      style={{
        boxShadow: "4px 4px 25px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="relative">
        <Image
          src={destination.imageUrl}
          alt={destination.title}
          width={260}
          height={200}
          className="rounded-[25px] mb-[20px] object-cover w-[260px] h-[200px]"
        />
        <div className="absolute top-[15px] right-[25px]">
          <Raiting>{destination.rating}</Raiting>
        </div>
      </div>

      <h4 className="text-base font-semibold mb-[5px] ml-[20px]">
        {destination.title}
      </h4>

      <div className="flex flex-row ml-[20px]">
        <LocationIcon />
        <span className="text-black/50 text-sm font-medium">
          {destination.location}
        </span>
      </div>
    </div>
  );
};

export default DestinationCard;
