import { LuPizza } from "react-icons/lu";
import "./Transaction.css";
import { IoGiftOutline } from "react-icons/io5";
import { MdCardTravel } from "react-icons/md";
import Button from "../Button/Button";

export default function Transaction({ data }) {
  const icons = {
    food: <LuPizza />,
    entertainment: <IoGiftOutline />,
    travel: <MdCardTravel />,
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        {icons.food}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p className="transactionTitle">{data.name}</p>
          <p className="transactionSubtitle">{data.date}</p>
        </div>
      </div>
      <div className="transactionAction">
        ₹{data.price}
        <div style={{ display: "flex", gap: "5px " }}>
          <Button type={"edit"} />
          <Button type={"delete"} />
        </div>
      </div>
    </div>
  );
}
