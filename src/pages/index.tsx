import AboutSection from "@/components/Layouts/AboutSection";
import DestinationsSection from "@/components/Layouts/DestinationsSection";
import FeedbacksSection from "@/components/Layouts/FeedbacksSection";
import Footer from "@/components/Layouts/Footer";
import OffersSection from "@/components/Layouts/OffersSection";
import WelcomeSection from "@/components/Layouts/WelcomeSection";

import cn from "classnames";

export default function Home() {
  return (
    <div
      className={cn(
        "w-[1440px] h-fit mx-auto my-0 bg-bg-color relative z-10 overflow-x-hidden",
        "xl:w-full"
      )}
    >
      <WelcomeSection />
      <OffersSection />
      <AboutSection />
      <DestinationsSection />
      <FeedbacksSection />
      <Footer />
    </div>
  );
}
