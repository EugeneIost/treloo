import feedbacks from "@/constants/feedbacks";
import { EmblaOptionsType } from "embla-carousel-react";
import Feedback from "./UI/Feedback";
import useEmblaCarousel from "embla-carousel-react/";
import { useCallback, useEffect, useState } from "react";
import { PrevButton, NextButton } from "./UI/EmblaCarouselButtons";
import cn from "classnames";

interface EmblaCarouselProps {
  options?: EmblaOptionsType;
}

const EmblaCarousel = ({ options }: EmblaCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div>
      <div className="w-full h-[465px] overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {feedbacks.map((feedback) => (
            <div
              key={feedback.userName}
              className={cn(
                "flex-[0_0_50%] min-w-0 flex items-center justify-center",
                "xl:flex-[0_0_100%]"
              )}
            >
              <Feedback feedback={feedback} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row justify-center mt-[30px]">
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    </div>
  );
};

export default EmblaCarousel;
