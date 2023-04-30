const StarIcon = () => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="15" height="15" fill="url(#pattern3)" />
      <defs>
        <pattern
          id="pattern3"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_10_8" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_10_8"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default StarIcon;
