import ArrowIcon from "./ArrowIcon";

interface NextPrevButtonsProps {
  enabled: boolean;
  onClick: () => void;
}

export const PrevButton = ({ enabled, onClick }: NextPrevButtonsProps) => {
  return (
    <button
      className="w-[40px] h-[40px] flex items-center justify-center border-[3px] border-blue/50 rounded-[15px]"
      onClick={onClick}
      disabled={!enabled}
    >
      <ArrowIcon />
    </button>
  );
};

export const NextButton = ({ enabled, onClick }: NextPrevButtonsProps) => {
  return (
    <button
      className="w-[40px] h-[40px] flex items-center justify-center border-[3px] border-blue/50 rounded-[15px]"
      onClick={onClick}
      disabled={!enabled}
    >
      <div className="rotate-180">
        <ArrowIcon />
      </div>
    </button>
  );
};
