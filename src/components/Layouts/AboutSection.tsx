import Image from "next/image";
import Subtitle from "../UI/Subtitle";
import Achievement from "../UI/Achievement";
import getConfig from "next/config";

import cn from "classnames";

const { publicRuntimeConfig } = getConfig();

const AboutSection = () => {
  return (
    <div
      className={cn(
        "py-[80px] px-[130px] flex flex-row gap-[120px] items-center justify-center",
        "lg:flex-col",
        "md:px-[20px]",
        "sm:px-[10px]"
      )}
    >
      <div
        className={cn(
          "min-w-[480px] min-h-[800px] relative",
          "md:min-w-[360px] md:min-h-[600px]",
          "sm:min-w-full sm:min-h-full"
        )}
      >
        <Image
          src={`${publicRuntimeConfig.staticFolder}/images/about-section-image.png`}
          alt="Travel Any Corner"
          width={480}
          height={800}
          quality={100}
          className={cn("md:w-[360px] md:h-[600px]", "sm:w-full sm:h-fit")}
        />
        <div
          className={cn(
            "absolute top-[10%] right-0 translate-x-2/4",
            "sm:-translate-x-0"
          )}
        >
          <Achievement count={300} text="destinations" />
        </div>

        <div
          className={cn(
            "absolute top-2/4 left-0 -translate-x-2/4 -translate-y-2/4",
            "sm:translate-x-0"
          )}
        >
          <Achievement count={5000} text="tourists" />
        </div>

        <div
          className={cn(
            "absolute bottom-[20%] right-0 translate-x-2/4",
            "sm:-translate-x-0"
          )}
        >
          <Achievement count={150} text="hotels" />
        </div>
      </div>

      <div>
        <div className="mb-[20px]">
          <Subtitle>Travel Any Corner of The World With Us</Subtitle>
        </div>
        <p className="text-lg text-black/50 mb-[20px]">
          Would you explore nature paradise in the world, let’s find the best
          destination in world with us, Would you explore nature paradise in the
          world, let’s find the best destination in world with us. Would you
          explore nature paradise in the world, let’s find the best destination
          in world with us.
          <br />
          <br /> Would you explore nature paradise in the world, let’s find the
          best destination in world with us.
        </p>

        <button
          className={cn(
            "w-[180px] h-[75px] flex items-center justify-center bg-blue text-white text-lg/[30px] rounded-[10px]",
            "hover:bg-[#F2F6FF] hover:text-blue hover:border-blue hover:border-[3px]"
          )}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
