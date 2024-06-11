import "./DisplayCard.css";
import { FaPlus } from "react-icons/fa";

export default function DisplayCard({
  amount,
  title,
  button,
  color,
  gradient,
}) {
  // let color = "linear-gradient(90deg, #FF9595 0%, #FF4747 80%, #FF3838 100%)";
  // if (title === "Wallet Balance") {
  //   color = "linear-gradient(90deg, #B5DC52 0%, #89E148 100%)";
  // }
  return (
    <div className="card">
      <p>
        {title} :{" "}
        <span style={{ color: color }} className="amuont">
          ₹{amount}
        </span>
      </p>
      <button style={{ background: gradient }}>
        <FaPlus size={8} /> {button}
      </button>
    </div>
  );
}
