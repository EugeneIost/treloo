interface BurgerMenuProps {
  onClick: () => void;
}

const BurgerMenuButton = ({ onClick }: BurgerMenuProps) => {
  return (
    <button className="flex flex-col h-fit w-fit" onClick={onClick}>
      <span className="inline-block h-[10px] w-[40px] border-white border-b-4"></span>
      <span className="inline-block h-[10px] w-[40px] border-white border-b-4"></span>
      <span className="inline-block h-[10px] w-[40px] border-white border-b-4"></span>
    </button>
  );
};

export default BurgerMenuButton;
