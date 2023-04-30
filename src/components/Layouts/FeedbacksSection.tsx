import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../EmblaCarousel";
import { useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";

const FeedbacksSection = () => {
  const { width } = useWindowSize();

  const [emblaOptions, setEmblaOptions] = useState<EmblaOptionsType>({
    slidesToScroll: width < 1440 ? 2 : 1,
    containScroll: "trimSnaps",
    loop: true,
  });

  useEffect(() => {
    if (width < 1440) {
      setEmblaOptions((current) => {
        return { ...current, slidesToScroll: 1 };
      });
    } else
      setEmblaOptions((current) => {
        return { ...current, slidesToScroll: 2 };
      });
  }, [width]);

  return (
    <div className="pt-[211px] pb-[126px] px-[10px]">
      <EmblaCarousel options={emblaOptions} />
    </div>
  );
};

export default FeedbacksSection;
