import Image from "next/image";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

interface HotelCardProps {
  imageUrl: string;
  title: string;
}

const HotelCard = ({ imageUrl, title }: HotelCardProps) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={`${publicRuntimeConfig.staticFolder}${imageUrl}`}
        alt={title}
        width={300}
        height={150}
        className="rounded-[25px] object-cover"
      />
      <h4 className="text-lg font-medium text-center mt-[10px]">{title}</h4>
    </div>
  );
};

export default HotelCard;
