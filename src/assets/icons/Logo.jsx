import { Link } from "react-router-dom";

function Logo({ globalClasses, logoClasses, textClasses }) {
  return (
    <Link to="/" className={"flex items-center " + globalClasses}>
      <svg
        className={" scale-100 " + logoClasses}
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="100" height="100" fill="url(#pattern0_203_93)" />
        <defs>
          <pattern
            id="pattern0_203_93"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_203_93" transform="scale(0.005)" />
          </pattern>
          <image
            id="image0_203_93"
            width="200"
            height="200"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
      <span
        className={" text-medium font-extrabold leading-tight " + textClasses}
      >
        Food <br /> Universe
      </span>
    </Link>
  );
}

export default Logo;
