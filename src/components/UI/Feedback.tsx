import IFeedback from "@/types/Feedback";
import Image from "next/image";
import Raiting from "./Rating";
import cn from "classnames";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

interface FeedbackProps {
  feedback: IFeedback;
}

const Feedback = ({ feedback }: FeedbackProps) => {
  return (
    <div
      className={cn(
        "pt-[84px] pl-[47px] pr-[25px] pb-[65px] w-[580px] h-fit bg-white rounded-[50px] flex flex-col relative",
        "sm:px-[10px]"
      )}
    >
      <Image
        src={`${publicRuntimeConfig.staticFolder}/images/quote.png`}
        alt="quote"
        width={131}
        height={104}
        className="absolute top-[36px] left-2/4 -translate-x-2/4"
      />
      <p
        className={cn(
          "text-center font-medium text-lg mb-[10px]",
          "sm:text-base"
        )}
      >
        {feedback.text}
      </p>
      <h5
        className={cn(
          "text-blue text-lg font-medium text-center",
          "sm:text-base"
        )}
      >
        -{feedback.userName}
      </h5>
      <span
        className={cn(
          "text-black/50 text-lg font-medium text-center",
          "sm:text-base"
        )}
      >
        {feedback.company}
      </span>

      <div className="h-[134px] pt-[24px] pl-[41px] pr-[38px] pb-[10px] absolute bottom-0 left-2/4 -translate-x-2/4 translate-y-2/4">
        <Image
          src={`${publicRuntimeConfig.staticFolder}/images/feedback-photo-background.png`}
          alt="feedback-background"
          fill
          quality={100}
        />
        <Image
          src={`${publicRuntimeConfig.staticFolder}${feedback.imageUrl}`}
          alt={feedback.userName}
          width={100}
          height={100}
          className="object-cover rounded-full relative"
        />
        <div className="absolute top-[30px] right-[20px] z-100">
          <Raiting>{feedback.rating}</Raiting>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
