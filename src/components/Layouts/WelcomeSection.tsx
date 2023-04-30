import BookingPanel from "../BookingPanel";
import Container from "../UI/Container";
import Title from "../UI/Title";
import Header from "./Header";

import cn from "classnames";

const WelcomeSection = () => {
  return (
    <Container>
      <Header />
      <div
        className={cn(
          "mt-[190px] mx-auto h-fit px-[310px]",
          "xl:px-[10%] xl:mt-[160px]",
          "md:px-[10px] md:mt-[100px]",
          "sm:mt-[50px]"
        )}
      >
        <div className="mb-[40px] h-fit">
          <Title>Discover Your Life, Travel Where You Want</Title>
        </div>
        <p
          className={cn(
            "text-xl text-center text-white font-medium",
            "md:text-lg",
            "sm:text-base"
          )}
        >
          Would you explore natur paradise in the world, let’s find the best
          <br />
          destination in world with us.
        </p>
      </div>

      <div
        className={cn(
          "relative -bottom-[15%] left-2/4 -translate-x-2/4 w-fit h-fit",
          "xl:w-full"
        )}
      >
        <BookingPanel />
      </div>
    </Container>
  );
};

export default WelcomeSection;
