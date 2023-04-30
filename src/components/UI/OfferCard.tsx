import IOffer from "@/types/Offer";
import Image from "next/image";
import cn from "classnames";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

interface OfferCardProps {
  offer: IOffer;
}

const OfferCard = ({ offer }: OfferCardProps) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-[50px] pt-[21px] pb-[25px] pr-[13px] pl-[27px] shadow-[0_0_6px_rgba(0,0,0,0.05)]">
      <div className="flex flex-row items-center mb-[20px]">
        <Image
          src={`${publicRuntimeConfig.staticFolder}${offer.imageUrl}`}
          alt={offer.title}
          width={293}
          height={273}
          quality={100}
          className={cn("mr-[20px] object-cover", "w-[230px]")}
        />
        <span
          className="text-black/75 text-base tracking-[0.5em]"
          style={{
            writingMode: "vertical-lr",
          }}
        >
          {offer.date}
        </span>
      </div>

      <div className="mb-[10px] flex self-start">
        <span
          className={cn("text-sm px-[16px] font-medium mr-3 rounded-[100px]", {
            "bg-[#FCDDEC] text-[#F178B6]": offer.type === "Relax",
            "bg-[#F1F1FD] text-[#7879F1]": offer.type === "Adventure",
          })}
        >
          {offer.type}
        </span>
        <span className="text-sm text-black/50">
          {offer.daysCount} Days, {offer.nightsCount} Nights
        </span>
      </div>

      <h4 className="text-xl/9 font-semibold mb-[10px] self-start">
        {offer.title}
      </h4>

      <div className="flex flex-row items-center justify-between w-full">
        <span className="text-xl/9 font-medium">
          {offer.price}$
          <span className="text-base text-black/50 font-medium">/Person</span>
        </span>

        <button
          className={cn(
            "w-[107px] h-[47px] flex items-center justify-center rounded-[10px] bg-[#F2F6FF] text-sm text-blue font-medium mr-[14px] transition-all",
            "hover:bg-blue hover:text-white"
          )}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
