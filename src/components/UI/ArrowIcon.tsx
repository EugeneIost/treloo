interface ArrowIconProps {
  color?: string;
  opacity?: string;
}

const ArrowIcon = ({ color = "#3E86F5", opacity = "1" }: ArrowIconProps) => {
  return (
    <svg
      width="15"
      height="23"
      viewBox="0 0 15 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.1429 1.28564L2.85715 11.5714L13.1429 21.8571"
        stroke={color}
        strokeWidth="3"
        opacity={opacity}
      />
    </svg>
  );
};

export default ArrowIcon;
