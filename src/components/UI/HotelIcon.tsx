const HotelIcon = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="25" height="25" fill="url(#pattern1)" />
      <defs>
        <pattern
          id="pattern1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2_83" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2_83"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default HotelIcon;
