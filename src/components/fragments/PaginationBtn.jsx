import { custom_border_radius } from "../../constants";

function PaginationBtn({ text, classes, isSelected = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className={` 
        hover:scale-105 transition-all leading-tight 
        content-center py-2 px-4 border-4
          ${
            isSelected
              ? "bg-primary text-secondary border-primary"
              : " border-secondary"
          }
        ${custom_border_radius} ${classes}`}
    >
      {text}
    </button>
  );
}

export default PaginationBtn;
