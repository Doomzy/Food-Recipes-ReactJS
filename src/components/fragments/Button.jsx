import { custom_border_radius } from "../../constants";
import { Link } from "react-router-dom";

function Button({ text, classes, to }) {
  return (
    <Link
      to={to}
      className={
        " w-fit bg-primary px-14 text-[20px] hover:scale-105 transition-all ease-out" +
        custom_border_radius +
        " " +
        classes
      }
    >
      {text}
    </Link>
  );
}

export default Button;
