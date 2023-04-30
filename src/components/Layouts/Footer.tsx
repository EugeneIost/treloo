import Image from "next/image";
import FooterLinkItem from "../UI/FooterLinkItem";
import cn from "classnames";

const Footer = () => {
  return (
    <footer
      className={cn(
        "py-[80px] px-[130px] bg-bg-color",
        "xl:px-[100px]",
        "lg:px-[20px]",
        "sm:px-[10px]"
      )}
    >
      <div
        className={cn(
          "w-full h-[580px] rounded-[100px] relative flex items-center justify-center",
          "lt:h-fit lt:py-[20px]"
        )}
      >
        <Image
          src={"/images/footer-background.png"}
          alt="background"
          fill
          quality={100}
        />

        <div
          className={cn(
            "flex flex-col items-center justify-center relative z-10 px-[218px]",
            "xl:px-[100px]",
            "lg:px-[50px]"
          )}
        >
          <h2
            className={cn(
              "text-xxl font-semibold text-white text-center",
              "lg:text-[36px]/[48px]",
              "sm:text-xl"
            )}
          >
            Don’t Miss The 50% Discount if You register Today
          </h2>

          <button
            className={cn(
              "flex items-center justify-center rounded-[25px] bg-white text-lg/[30px] font-medium text-blue w-[220px] h-[80px] mt-[40px] hover:bg-blue hover:text-white transition-all",
              "sm:w-[180px] sm:h-[60px]"
            )}
          >
            Register Today
          </button>
        </div>
      </div>

      <div
        className={cn(
          "flex flex-row justify-between items-center mt-[120px]",
          "md:flex-col"
        )}
      >
        <span
          className={cn(
            "text-lg font-medium text-black/50 mr-[20px]",
            "lg:text-base",
            "md:mb-[20px]",
            "sm:text-center"
          )}
        >
          &copy; 2023 Treloo LLC - All right reserved
        </span>

        <ul
          className={cn("flex flex-row gap-[50px] list-none", "sm:gap-[20px]")}
        >
          <FooterLinkItem>Rewiew</FooterLinkItem>
          <FooterLinkItem>Tips</FooterLinkItem>
          <FooterLinkItem>Alerts</FooterLinkItem>
          <FooterLinkItem>Blog</FooterLinkItem>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
