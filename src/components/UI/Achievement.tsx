import cn from "classnames";

interface AchievementProps {
  count: number;
  text: string;
}
const Achievement = ({ count, text }: AchievementProps) => {
  return (
    <div
      className={cn(
        "px-[30px] py-[26px] flex flex-col justify-center items-center relative bg-white rounded-[35px] shadow-[0_0_25px_rgba(0,0,0,0.1)]"
      )}
    >
      <span className={cn("text-[36px]/[54px] text-blue", "sm:text-xl")}>
        {count}+
      </span>
      <span
        className={cn(
          "text-base font-light uppercase absolute top-[60%] left-2/4 -translate-x-2/4",
          "sm:text-sm"
        )}
      >
        {text}
      </span>
    </div>
  );
};

export default Achievement;
