import { MdOutlineEdit } from "react-icons/md";
import "./Button.css";
import { RxCrossCircled } from "react-icons/rx";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
export default function Button({ type }) {
  let color = "#FF3838";
  let icon = <RxCrossCircled />;
  switch (type) {
    case "edit": {
      color = "#F4BB4A";
      icon = <MdOutlineEdit />;
      break;
    }

    case "delete": {
      color = "#FF3838";
      icon = <RxCrossCircled />;
      break;
    }
    case "moveLeft": {
      color = "#F1F1F1";
      icon = <FaArrowLeft color=" #222222" />;
      break;
    }
    case "moveRight": {
      color = "#F1F1F1";
      icon = <FaArrowRight color=" #222222" />;
      break;
    }
  }

  return (
    <button className="smallButton" style={{ backgroundColor: color }}>
      {icon}
    </button>
  );
}
